import express from 'express';
import cors from 'cors';
import path from 'path';
import { mindmapRouter } from './routes/mindmap.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API 路由
app.use('/api/mindmaps', mindmapRouter);

// 生产模式：serve 前端构建产物
if (process.env.NODE_ENV === 'production') {
    const clientDist = path.join(import.meta.dirname, '../../client/dist');
    app.use(express.static(clientDist));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(clientDist, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
