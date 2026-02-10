import type { MindmapData } from '../../../shared/types.js';

export const mindmaps: MindmapData[] = [
    // ============ 1. AI Coding 全流程 ============
    {
        id: 'ai-coding-flow',
        title: 'AI Coding 全流程',
        subtitle: 'PLAN → 编写代码 → 调试 → Git 管理 → 部署上线',
        icon: '🚀',
        root: {
            id: 'flow-root',
            label: 'AI Coding 全流程',
            color: '#6366f1',
            children: [
                {
                    id: 'flow-plan',
                    label: 'PLAN 规划',
                    icon: '📋',
                    color: '#8b5cf6',
                    description: '项目起步的第一步',
                    children: [
                        { id: 'flow-plan-1', label: '明确需求', description: '告诉 AI 你要做什么' },
                        { id: 'flow-plan-2', label: '技术选型', description: '选择合适的技术栈' },
                        { id: 'flow-plan-3', label: '目录规划', description: '设计项目文件结构' },
                    ],
                },
                {
                    id: 'flow-code',
                    label: 'AI 编写代码',
                    icon: '🤖',
                    color: '#06b6d4',
                    description: '让 AI 生成代码',
                    children: [
                        { id: 'flow-code-1', label: '对话式编程', description: '用自然语言描述需求' },
                        { id: 'flow-code-2', label: '逐步迭代', description: '分步骤构建功能' },
                        { id: 'flow-code-3', label: '审查代码', description: '检查 AI 生成的代码质量' },
                    ],
                },
                {
                    id: 'flow-debug',
                    label: '调试排错',
                    icon: '🔍',
                    color: '#f59e0b',
                    description: '解决运行中的问题',
                    children: [
                        { id: 'flow-debug-1', label: '看报错信息', description: '复制错误给 AI 分析' },
                        { id: 'flow-debug-2', label: '日志调试', description: '通过 console.log 定位问题' },
                        { id: 'flow-debug-3', label: '浏览器开发者工具', description: 'F12 查看网络/控制台' },
                    ],
                },
                {
                    id: 'flow-git',
                    label: 'Git 管理',
                    icon: '📦',
                    color: '#10b981',
                    description: '版本管理和代码托管',
                    children: [
                        { id: 'flow-git-1', label: '提交代码', description: 'git add / commit' },
                        { id: 'flow-git-2', label: '推送远程', description: 'git push 到 GitHub' },
                        { id: 'flow-git-3', label: '版本标签', description: 'git tag 标记里程碑' },
                    ],
                },
                {
                    id: 'flow-deploy',
                    label: '部署上线',
                    icon: '🌐',
                    color: '#ef4444',
                    description: '让别人也能访问',
                    children: [
                        { id: 'flow-deploy-1', label: 'Netlify 部署', description: '拖拽上传，一键上线' },
                        { id: 'flow-deploy-2', label: '自定义域名', description: '绑定自己的域名' },
                        { id: 'flow-deploy-3', label: '持续集成', description: 'push 代码自动部署' },
                    ],
                },
            ],
        },
    },

    // ============ 2. PLAN 功能详解 ============
    {
        id: 'plan-detail',
        title: 'PLAN 功能详解',
        subtitle: '需求描述、技术选型、目录规划、文件拆分、提示词技巧',
        icon: '📋',
        root: {
            id: 'plan-root',
            label: 'PLAN 功能详解',
            color: '#8b5cf6',
            children: [
                {
                    id: 'plan-req',
                    label: '需求描述',
                    icon: '💡',
                    color: '#a78bfa',
                    children: [
                        { id: 'plan-req-1', label: '用户故事', description: '作为XX，我需要XX，以便XX' },
                        { id: 'plan-req-2', label: '功能清单', description: '列出所有需要实现的功能' },
                        { id: 'plan-req-3', label: '参考示例', description: '提供类似产品做参考' },
                    ],
                },
                {
                    id: 'plan-tech',
                    label: '技术选型',
                    icon: '⚙️',
                    color: '#7c3aed',
                    children: [
                        { id: 'plan-tech-1', label: '前端框架', description: 'React / Vue / 原生 HTML' },
                        { id: 'plan-tech-2', label: '后端语言', description: 'Node.js / Python / Go' },
                        { id: 'plan-tech-3', label: '数据库', description: 'PostgreSQL / MongoDB / SQLite' },
                    ],
                },
                {
                    id: 'plan-dir',
                    label: '目录规划',
                    icon: '📁',
                    color: '#6d28d9',
                    children: [
                        { id: 'plan-dir-1', label: '分层结构', description: 'src / components / utils' },
                        { id: 'plan-dir-2', label: '模块化组织', description: '按功能模块划分文件' },
                        { id: 'plan-dir-3', label: '配置文件', description: 'tsconfig / vite.config 等' },
                    ],
                },
                {
                    id: 'plan-split',
                    label: '文件拆分',
                    icon: '✂️',
                    color: '#5b21b6',
                    children: [
                        { id: 'plan-split-1', label: '单一职责', description: '一个文件做一件事' },
                        { id: 'plan-split-2', label: '复用优先', description: '公共逻辑提取为工具函数' },
                        { id: 'plan-split-3', label: '类型独立', description: '类型定义放在单独文件' },
                    ],
                },
                {
                    id: 'plan-prompt',
                    label: '提示词技巧',
                    icon: '💬',
                    color: '#4c1d95',
                    children: [
                        { id: 'plan-prompt-1', label: '具体明确', description: '避免模糊的描述' },
                        { id: 'plan-prompt-2', label: '分步拆解', description: '复杂任务拆分为小步骤' },
                        { id: 'plan-prompt-3', label: '提供上下文', description: '告诉 AI 现有代码和技术栈' },
                    ],
                },
            ],
        },
    },

    // ============ 3. Git 核心概念 ============
    {
        id: 'git-concepts',
        title: 'Git 核心概念',
        subtitle: 'Git 含义、GitHub vs GitLab、推/拉代码、分支、Tag 版本管理',
        icon: '📦',
        root: {
            id: 'git-root',
            label: 'Git 核心概念',
            color: '#10b981',
            children: [
                {
                    id: 'git-what',
                    label: 'Git 是什么',
                    icon: '❓',
                    color: '#34d399',
                    children: [
                        { id: 'git-what-1', label: '版本管理工具', description: '记录代码每一次变更' },
                        { id: 'git-what-2', label: '分布式', description: '每个开发者都有完整副本' },
                        { id: 'git-what-3', label: '快照模型', description: '每次提交是项目的快照' },
                    ],
                },
                {
                    id: 'git-platform',
                    label: 'GitHub vs GitLab',
                    icon: '🏠',
                    color: '#059669',
                    children: [
                        { id: 'git-plat-1', label: 'GitHub', description: '最流行的开源平台' },
                        { id: 'git-plat-2', label: 'GitLab', description: '企业自建首选' },
                        { id: 'git-plat-3', label: '选择建议', description: '个人项目用 GitHub 即可' },
                    ],
                },
                {
                    id: 'git-pushpull',
                    label: '推/拉代码',
                    icon: '🔄',
                    color: '#047857',
                    children: [
                        { id: 'git-pp-1', label: 'git push', description: '本地代码推送到远程' },
                        { id: 'git-pp-2', label: 'git pull', description: '远程代码拉取到本地' },
                        { id: 'git-pp-3', label: 'git clone', description: '首次下载完整仓库' },
                    ],
                },
                {
                    id: 'git-branch',
                    label: '分支管理',
                    icon: '🌿',
                    color: '#065f46',
                    children: [
                        { id: 'git-br-1', label: 'main 主分支', description: '正式版本代码' },
                        { id: 'git-br-2', label: '功能分支', description: '开发新功能时创建' },
                        { id: 'git-br-3', label: '合并请求', description: 'Pull Request / Merge Request' },
                    ],
                },
                {
                    id: 'git-tag',
                    label: 'Tag 版本管理',
                    icon: '🏷️',
                    color: '#064e3b',
                    children: [
                        { id: 'git-tag-1', label: '语义化版本', description: 'v1.0.0（主.次.补丁）' },
                        { id: 'git-tag-2', label: '创建 Tag', description: 'git tag v1.0.0' },
                        { id: 'git-tag-3', label: '发布说明', description: 'Release Notes 记录变更' },
                    ],
                },
            ],
        },
    },

    // ============ 4. 网络与部署 ============
    {
        id: 'network-deploy',
        title: '网络与部署',
        subtitle: 'localhost/局域网/公网区别、找研发帮忙、Netlify 快速部署',
        icon: '🌐',
        root: {
            id: 'net-root',
            label: '网络与部署',
            color: '#ef4444',
            children: [
                {
                    id: 'net-local',
                    label: 'localhost 本机',
                    icon: '💻',
                    color: '#f87171',
                    children: [
                        { id: 'net-local-1', label: '什么是 localhost', description: '只有你自己能访问' },
                        { id: 'net-local-2', label: '开发服务器', description: 'npm run dev 启动' },
                        { id: 'net-local-3', label: '端口号', description: ':3000 / :5173 等' },
                    ],
                },
                {
                    id: 'net-lan',
                    label: '局域网',
                    icon: '🏠',
                    color: '#dc2626',
                    children: [
                        { id: 'net-lan-1', label: '同一 WiFi', description: '同网络下的设备互相访问' },
                        { id: 'net-lan-2', label: 'IP 地址', description: '通过 192.168.x.x 访问' },
                        { id: 'net-lan-3', label: '手机调试', description: '手机访问电脑上的开发服务器' },
                    ],
                },
                {
                    id: 'net-public',
                    label: '公网',
                    icon: '🌍',
                    color: '#b91c1c',
                    children: [
                        { id: 'net-pub-1', label: '域名解析', description: '域名转换为 IP 地址' },
                        { id: 'net-pub-2', label: 'HTTPS', description: '加密传输保障安全' },
                        { id: 'net-pub-3', label: 'CDN', description: '全球加速访问' },
                    ],
                },
                {
                    id: 'net-help',
                    label: '找研发帮忙',
                    icon: '🤝',
                    color: '#991b1b',
                    children: [
                        { id: 'net-help-1', label: '何时找人', description: '超出 AI 能力范围时' },
                        { id: 'net-help-2', label: '准备材料', description: '报错截图 + 代码 + 期望效果' },
                        { id: 'net-help-3', label: '沟通技巧', description: '描述清楚问题和已尝试方案' },
                    ],
                },
                {
                    id: 'net-netlify',
                    label: 'Netlify 部署',
                    icon: '🚀',
                    color: '#7f1d1d',
                    children: [
                        { id: 'net-net-1', label: '注册账号', description: '用 GitHub 登录' },
                        { id: 'net-net-2', label: '拖拽上传', description: '把 dist 文件夹拖进去' },
                        { id: 'net-net-3', label: '自动部署', description: '连接 GitHub 仓库，push 自动发布' },
                    ],
                },
            ],
        },
    },

    // ============ 5. AI 代码审查要点 ============
    {
        id: 'code-review',
        title: 'AI 代码审查要点',
        subtitle: '数据持久化（localStorage vs 数据库）、模块化设计、扩展性规划',
        icon: '🔍',
        root: {
            id: 'review-root',
            label: 'AI 代码审查要点',
            color: '#f59e0b',
            children: [
                {
                    id: 'review-persist',
                    label: '数据持久化',
                    icon: '💾',
                    color: '#fbbf24',
                    children: [
                        { id: 'review-p-1', label: 'localStorage', description: '简单场景，刷新不丢数据' },
                        { id: 'review-p-2', label: 'IndexedDB', description: '浏览器端大量结构化数据' },
                        { id: 'review-p-3', label: '后端数据库', description: '多用户/多设备必须用数据库' },
                    ],
                },
                {
                    id: 'review-modular',
                    label: '模块化设计',
                    icon: '🧩',
                    color: '#f59e0b',
                    children: [
                        { id: 'review-m-1', label: '文件职责清晰', description: '每个文件有明确的功能边界' },
                        { id: 'review-m-2', label: '函数粒度', description: '一个函数做一件事' },
                        { id: 'review-m-3', label: '避免重复', description: 'DRY 原则：Don\'t Repeat Yourself' },
                    ],
                },
                {
                    id: 'review-scale',
                    label: '扩展性规划',
                    icon: '📐',
                    color: '#d97706',
                    children: [
                        { id: 'review-s-1', label: '配置外置', description: '可变部分放在配置中' },
                        { id: 'review-s-2', label: '接口抽象', description: '用接口隔离具体实现' },
                        { id: 'review-s-3', label: '预留扩展', description: '考虑未来新增功能的接入点' },
                    ],
                },
                {
                    id: 'review-check',
                    label: '检查清单',
                    icon: '✅',
                    color: '#b45309',
                    children: [
                        { id: 'review-c-1', label: '数据存在哪', description: '刷新后数据是否还在？' },
                        { id: 'review-c-2', label: '代码能否复用', description: '是否有大段重复逻辑？' },
                        { id: 'review-c-3', label: '新功能好加吗', description: '添加需求需要改多少文件？' },
                    ],
                },
            ],
        },
    },

    // ============ 6. 进阶学习路线 ============
    {
        id: 'advanced-learning',
        title: '进阶学习路线',
        subtitle: 'TypeScript、PostgreSQL 入门、Linux Shell 入门',
        icon: '🎓',
        root: {
            id: 'adv-root',
            label: '进阶学习路线',
            color: '#06b6d4',
            children: [
                {
                    id: 'adv-ts',
                    label: 'TypeScript',
                    icon: '🔷',
                    color: '#22d3ee',
                    children: [
                        { id: 'adv-ts-1', label: '为什么学 TS', description: '类型安全，减少运行时错误' },
                        { id: 'adv-ts-2', label: '基础类型', description: 'string / number / boolean / interface' },
                        { id: 'adv-ts-3', label: '在项目中使用', description: '配置 tsconfig，逐步迁移' },
                    ],
                },
                {
                    id: 'adv-pg',
                    label: 'PostgreSQL',
                    icon: '🐘',
                    color: '#0891b2',
                    children: [
                        { id: 'adv-pg-1', label: '为什么学数据库', description: '数据持久化的工业级方案' },
                        { id: 'adv-pg-2', label: 'SQL 基础', description: 'SELECT / INSERT / UPDATE / DELETE' },
                        { id: 'adv-pg-3', label: '表设计', description: '字段类型、主键、外键关系' },
                    ],
                },
                {
                    id: 'adv-linux',
                    label: 'Linux Shell',
                    icon: '🐧',
                    color: '#0e7490',
                    children: [
                        { id: 'adv-linux-1', label: '为什么学 Shell', description: '服务器管理的必备技能' },
                        { id: 'adv-linux-2', label: '常用命令', description: 'ls / cd / cat / grep / chmod' },
                        { id: 'adv-linux-3', label: '脚本编写', description: '自动化部署和日常任务' },
                    ],
                },
                {
                    id: 'adv-more',
                    label: '学习建议',
                    icon: '📚',
                    color: '#155e75',
                    children: [
                        { id: 'adv-more-1', label: '边做边学', description: '在实际项目中学习最高效' },
                        { id: 'adv-more-2', label: '善用 AI', description: '让 AI 解释不懂的概念' },
                        { id: 'adv-more-3', label: '持续积累', description: '每天进步一点点' },
                    ],
                },
            ],
        },
    },
];
