import type { MindmapSummary, MindmapData } from '../../shared/types.js';

const API_BASE = '/api/mindmaps';

/** 获取所有思维导图列表 */
export async function fetchMindmapList(): Promise<MindmapSummary[]> {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error(`Failed to fetch mindmap list: ${res.status}`);
    return res.json();
}

/** 获取单张思维导图完整数据 */
export async function fetchMindmap(id: string): Promise<MindmapData> {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch mindmap "${id}": ${res.status}`);
    return res.json();
}
