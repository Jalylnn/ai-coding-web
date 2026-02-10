/**
 * SVG 思维导图渲染引擎
 * 递归布局 → 节点绘制 → 贝塞尔曲线连线 → 展开/收起动画
 */

import type { MindmapNode } from '../../shared/types.js';

// ============ Config ============
const CFG = {
    nodeW: 200,
    nodeH: 56,
    nodeHWithDesc: 74,
    rootW: 240,
    rootH: 64,
    gapX: 60,
    gapY: 16,
    paddingX: 40,
    paddingY: 40,
    fontSize: 13,
    fontSizeRoot: 16,
    descFontSize: 11,
} as const;

// ============ Layout types ============
interface LayoutNode {
    node: MindmapNode;
    x: number;
    y: number;
    w: number;
    h: number;
    children: LayoutNode[];
    collapsed: boolean;
    depth: number;
}

// ============ Collapsed state ============
const collapsedSet = new Set<string>();

// ============ Layout ============
function getNodeSize(node: MindmapNode, depth: number): { w: number; h: number } {
    if (depth === 0) return { w: CFG.rootW, h: CFG.rootH };
    return {
        w: CFG.nodeW,
        h: node.description ? CFG.nodeHWithDesc : CFG.nodeH,
    };
}

function layoutTree(node: MindmapNode, depth: number): LayoutNode {
    const { w, h } = getNodeSize(node, depth);
    const collapsed = collapsedSet.has(node.id);

    const children: LayoutNode[] = [];
    if (!collapsed && node.children) {
        for (const child of node.children) {
            children.push(layoutTree(child, depth + 1));
        }
    }

    return { node, x: 0, y: 0, w, h, children, collapsed, depth };
}

/** Compute subtree height */
function subtreeHeight(ln: LayoutNode): number {
    if (ln.children.length === 0) return ln.h;
    let total = 0;
    for (let i = 0; i < ln.children.length; i++) {
        total += subtreeHeight(ln.children[i]);
        if (i < ln.children.length - 1) total += CFG.gapY;
    }
    return Math.max(ln.h, total);
}

/** Position nodes (root-right layout) */
function positionTree(ln: LayoutNode, startX: number, startY: number): void {
    const treeH = subtreeHeight(ln);
    ln.x = startX;
    ln.y = startY + (treeH - ln.h) / 2;

    let childX = startX + ln.w + CFG.gapX;
    let childY = startY;

    for (const child of ln.children) {
        const ch = subtreeHeight(child);
        positionTree(child, childX, childY);
        childY += ch + CFG.gapY;
    }
}

// ============ SVG helpers ============
function svgEl<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}): SVGElementTagNameMap[K] {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) {
        el.setAttribute(k, String(v));
    }
    return el;
}

function bezierPath(x1: number, y1: number, x2: number, y2: number): string {
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

// ============ Render ============
function renderLinks(g: SVGGElement, ln: LayoutNode): void {
    for (const child of ln.children) {
        const x1 = ln.x + ln.w;
        const y1 = ln.y + ln.h / 2;
        const x2 = child.x;
        const y2 = child.y + child.h / 2;

        const color = child.node.color || ln.node.color || '#6366f1';
        const path = svgEl('path', {
            d: bezierPath(x1, y1, x2, y2),
            class: 'mm-link',
            stroke: color,
        });
        g.appendChild(path);

        renderLinks(g, child);
    }
}

function renderNodes(g: SVGGElement, ln: LayoutNode, onToggle: (id: string) => void): void {
    const group = svgEl('g', { class: 'mm-node-group' });
    const color = ln.node.color || '#6366f1';

    // Node rectangle
    const rect = svgEl('rect', {
        x: ln.x,
        y: ln.y,
        width: ln.w,
        height: ln.h,
        fill: color,
        class: 'mm-node-rect',
        opacity: ln.depth === 0 ? 1 : 0.85,
    });
    group.appendChild(rect);

    const textStartX = ln.x + 16;

    // Label
    const label = svgEl('text', {
        x: textStartX,
        y: ln.y + (ln.node.description ? 24 : ln.h / 2),
        'dominant-baseline': ln.node.description ? 'auto' : 'central',
        'font-size': ln.depth === 0 ? CFG.fontSizeRoot : CFG.fontSize,
        class: 'mm-node-label',
    });
    label.textContent = ln.node.label;
    group.appendChild(label);

    // Description
    if (ln.node.description && ln.depth > 0) {
        const desc = svgEl('text', {
            x: textStartX,
            y: ln.y + 42,
            'dominant-baseline': 'auto',
            'font-size': CFG.descFontSize,
            class: 'mm-node-desc',
        });
        desc.textContent = ln.node.description;
        group.appendChild(desc);
    }

    // Expand/Collapse button
    if (ln.node.children && ln.node.children.length > 0) {
        const btnR = 10;
        const btnX = ln.x + ln.w + 2;
        const btnY = ln.y + ln.h / 2;

        const btnCircle = svgEl('circle', {
            cx: btnX,
            cy: btnY,
            r: btnR,
            fill: 'rgba(255,255,255,0.1)',
            stroke: color,
            'stroke-width': 1.5,
            class: 'mm-expand-btn',
        });

        const btnText = svgEl('text', {
            x: btnX,
            y: btnY,
            'text-anchor': 'middle',
            'dominant-baseline': 'central',
            fill: '#fff',
            'font-size': 12,
            'font-weight': '700',
            'pointer-events': 'none',
        });
        btnText.textContent = ln.collapsed ? '+' : '−';

        const btnGroup = svgEl('g');
        btnGroup.appendChild(btnCircle);
        btnGroup.appendChild(btnText);
        btnGroup.addEventListener('click', (e) => {
            e.stopPropagation();
            onToggle(ln.node.id);
        });
        group.appendChild(btnGroup);
    }

    g.appendChild(group);

    for (const child of ln.children) {
        renderNodes(g, child, onToggle);
    }
}

// ============ Public API ============
export function renderMindmap(container: HTMLElement, root: MindmapNode): void {
    const draw = () => {
        container.innerHTML = '';

        // Layout
        const layoutRoot = layoutTree(root, 0);
        positionTree(layoutRoot, CFG.paddingX, CFG.paddingY);

        // Calculate bounds
        let maxX = 0;
        let maxY = 0;

        const walk = (ln: LayoutNode) => {
            maxX = Math.max(maxX, ln.x + ln.w + 30);
            maxY = Math.max(maxY, ln.y + ln.h);
            ln.children.forEach(walk);
        };
        walk(layoutRoot);

        const svgW = maxX + CFG.paddingX;
        const svgH = maxY + CFG.paddingY;

        const svg = svgEl('svg', {
            width: svgW,
            height: svgH,
            viewBox: `0 0 ${svgW} ${svgH}`,
        });

        // Links layer
        const linksG = svgEl('g');
        renderLinks(linksG, layoutRoot);
        svg.appendChild(linksG);

        // Nodes layer
        const nodesG = svgEl('g');
        renderNodes(nodesG, layoutRoot, (id) => {
            if (collapsedSet.has(id)) {
                collapsedSet.delete(id);
            } else {
                collapsedSet.add(id);
            }
            draw();
        });
        svg.appendChild(nodesG);

        container.appendChild(svg);
    };

    draw();
}
