# AI Coding 知识框架

面向非程序员独立开发者的交互式思维导图网站，前端由 Vite 构建，API 由 Netlify Functions 提供。

## 架构

- `client/`: Vite + TypeScript 前端
- `netlify/functions/`: API 函数
- `shared/`: 前后端共享类型与数据
- `server/`: 原 Express 版本（保留用于本地或迁移对照）

## 本地开发

```bash
npm run dev
```

默认通过 Netlify Dev 启动，前端与函数统一联调。

如果你要继续使用旧的本地 Express + Vite 双进程模式：

```bash
npm run dev:legacy
```

## 构建与预览

```bash
npm run build
npm run preview
```

## API

- `GET /api/mindmaps` 返回思维导图列表
- `GET /api/mindmaps/:id` 返回单张思维导图完整数据

## Netlify 部署

仓库已提供 `netlify.toml`：

- Build command: `npm run build`
- Publish directory: `client/dist`
- Functions directory: `netlify/functions`

部署后验证：

1. 首页是否正常加载卡片
2. 点击卡片是否打开详情图
3. `/api/mindmaps` 与 `/api/mindmaps/:id` 是否返回 JSON
4. 详情页刷新是否正常返回应用页面
