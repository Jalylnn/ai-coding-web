/** 思维导图节点 */
export interface MindmapNode {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  children?: MindmapNode[];
  color?: string;
}

/** 一张完整的思维导图数据 */
export interface MindmapData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  root: MindmapNode;
}

/** 思维导图列表项（不含完整树） */
export interface MindmapSummary {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}
