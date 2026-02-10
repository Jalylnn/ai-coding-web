import { Router } from 'express';
import { getMindmapById, getMindmapList } from '../../../shared/mindmaps.js';

export const mindmapRouter = Router();

// GET /api/mindmaps — 返回所有思维导图列表
mindmapRouter.get('/', (_req, res) => {
    res.json(getMindmapList());
});

// GET /api/mindmaps/:id — 返回单张思维导图完整数据
mindmapRouter.get('/:id', (req, res) => {
    const mindmap = getMindmapById(req.params.id);
    if (!mindmap) {
        res.status(404).json({ error: 'Mindmap not found' });
        return;
    }
    res.json(mindmap);
});
