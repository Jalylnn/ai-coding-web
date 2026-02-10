import { Router } from 'express';
import { mindmaps } from '../data/mindmaps.js';
import type { MindmapSummary } from '../../../shared/types.js';

export const mindmapRouter = Router();

// GET /api/mindmaps — 返回所有思维导图列表
mindmapRouter.get('/', (_req, res) => {
    const list: MindmapSummary[] = mindmaps.map(({ id, title, subtitle, icon }) => ({
        id,
        title,
        subtitle,
        icon,
    }));
    res.json(list);
});

// GET /api/mindmaps/:id — 返回单张思维导图完整数据
mindmapRouter.get('/:id', (req, res) => {
    const mindmap = mindmaps.find((m) => m.id === req.params.id);
    if (!mindmap) {
        res.status(404).json({ error: 'Mindmap not found' });
        return;
    }
    res.json(mindmap);
});
