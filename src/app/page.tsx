"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, MessageCircle, Newspaper, ExternalLink, ArrowRight, Calendar, Tag} from "lucide-react"
import Link from "next/link"
import {QRPopover} from "@/components/qr-dialog"
import {toast} from "sonner"

const posts = [
    {
        title: "Manus 卖了 20 亿美金，值还是不值？",
        excerpt: "分析 Manus 价值几何以及对 Meta 的战略意义",
        date: "2025-12-31",
        tags: ["AI Agent"],
        link: "https://mp.weixin.qq.com/s/okZfjpaLqj0ka72eDc4mzA"
    },
    {
        title: "万亿美元角逐：AI正在撕裂传统数据中心",
        excerpt: "分析 AI 对传统数据中心行业的冲击与变革",
        date: "2025-11-03",
        tags: ["AIDC"],
        link: "https://mp.weixin.qq.com/s/h5F_Uv_Wyg3pcyFptqnX_g"
    },
    {
        title: "Autogen 群聊的WebSocket多会话复用架构",
        excerpt: "如何优化 Autogen 基于 Websocket 的多智能体群聊多会话管理与消息传递",
        date: "2025-08-07",
        tags: ["AI Agent", "Autogen"],
        link: "https://mp.weixin.qq.com/s/wk-ydLlUdytg4slWlw16FA"
    },{
        title: "AI读心术大比拼：谁家的模型更\"狡猾\"？",
        excerpt: "一个 AI 心理博弈游戏项目，实现经典的'猜2/3平均数'博弈论游戏。",
        date: "2025-05-30",
        tags: ["AI", "游戏"],
        link: "https://mp.weixin.qq.com/s/xHYKh4c0n0Ns4DHsWGWaIg"
    },
    {
        title: "midscene-browser：让AI化身浏览器\"小助手\"",
        excerpt: "基于 Midscene.js 开发的 Chrome 浏览器自动化插件",
        date: "2025-05-06",
        tags: ["Chrome 插件", "工具"],
        link: "https://mp.weixin.qq.com/s/ZFjuhNN5gcOzuvI9xnyVgQ"
    },
    {
        title: "Manus, 你再不出道你就 Out 了！AI 智能体的生死竞速与未来突围",
        excerpt: "探讨大模型与 AI Agent 产品的囚徒困境",
        date: "2025-04-18",
        tags: ["产品", "创业"],
        link: "https://mp.weixin.qq.com/s/EVqxuF_zt854TNJk1HP9AQ"
    },
    {
        title: "AI太猛了！摸鱼半天，我竟然开发了一个网站！",
        excerpt: "使用 Cursor 体验氛围编程的威力",
        date: "2025-03-28",
        tags: ["AI", "编程思维", "未来技术"],
        link: "https://mp.weixin.qq.com/s/AHeyfkdruBnuvRwCCGBYVQ"
    },
    {
        title: "DeepSeek的技术突破：人工智能发展的三大动力与新变革",
        excerpt: "从 DeepSeek 的突破，探讨 AI 未来发展的方向。",
        date: "2025-02-04",
        tags: ["大模型"],
        link: "https://mp.weixin.qq.com/s/g2E1jLFxG7B6G3w7xIb8Tg"
    },
]

const projects = [
    {
        title: "Midscene Browser",
        description: "让 AI 替您操作浏览器的插件",
        link: "https://chromewebstore.google.com/detail/midscene-browser/nfpeeekdhenglhecglicddgmjiepbcph",
        tech: ["Chrome Extension", "AI Browser"]
    },
    {
        title: "AI Agent Prompt Lab",
        description: "一个探索开源 AI Agent Prompt 原理的网站",
        link: "https://fishisnow.github.io/agents-prompts-collection/index.html",
        tech: ["AI Agent Prompt"]
    },
    {
        title: "AI心理大PK",
        description: "让各大厂商的 AI 参与一个 2/3 平均数的心理博弈游戏，看看谁笑到最后！",
        link: "https://fishisnow.github.io/ai-game-theory/",
        tech: ["AI比赛", "心理学"]
    },
    {
        title: "股市望远镜",
        description: "记录投资灵感与市场观察的工具",
        link: "https://invest.fishisnow.xyz/",
        tech: ["投资", "股票"]
    },
]

export default function Home() {
    const handleCopyWeChat = () => {
        navigator.clipboard.writeText("fishisnow").then(() => {
            toast.success("微信号已复制")
        })
    }

    const handleCopyOfficial = () => {
        navigator.clipboard.writeText("fishisnow").then(() => {
            toast.success("公众号已复制")
        })
    }

    const basePath = process.env.NODE_ENV === 'production' ? '/homepage' : ''

    return (
        <div className="w-full min-h-screen">
            {/* Hero Section - Enhanced */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
                
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                            👋 欢迎来到我的数字空间
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                            fishisnow
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            AI Native Coder，探索人工智能时代的开发方式与思维转变
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="https://github.com/fishisnow" target="_blank">
                                <Button variant="outline" size="lg" className="group border-2 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform"/>
                                    Github
                                </Button>
                            </Link>
                            <QRPopover imagePath={`${basePath}/wechat.jpg`} type="wechat">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleCopyWeChat}
                                    className="group border-2 hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"/>
                                    WeChat
                                </Button>
                            </QRPopover>
                            <QRPopover imagePath={`${basePath}/official-account.jpg`} type="official">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleCopyOfficial}
                                    className="group border-2 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                                >
                                    <Newspaper className="mr-2 h-5 w-5 group-hover:bounce transition-transform"/>
                                    公众号
                                </Button>
                            </QRPopover>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Articles Section - Enhanced */}
            <section id="articles" className="py-24 bg-white dark:bg-gray-900 relative">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-16">
                            <div>
                                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    最新文章
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg">
                                    分享最新的技术思考与实践经验
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {posts.map((post, index) => (
                                <Link key={index} href={post.link}>
                                    <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <time dateTime={post.date}>{post.date}</time>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-3">
                                                {post.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow"
                                                    >
                                                        <Tag className="w-3 h-3 mr-1" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">
                                                <span className="mr-2 group-hover:mr-3 transition-all">阅读更多</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - Enhanced */}
            <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                项目作品
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                AI writes code. Humans own the bugs.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2">
                                    <CardHeader className="pb-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                                        <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium border border-blue-200 dark:border-blue-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                        >
                                            <span className="mr-2 group-hover/link:mr-3 transition-all">了解更多</span>
                                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"/>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                fishisnow
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                探索 AI 时代的开发方式与思维转变，分享技术实践与创新思考
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-8 mb-8">
                            <Link 
                                href="https://github.com/fishisnow" 
                                target="_blank"
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </Link>
                            <QRPopover imagePath={`${basePath}/wechat.jpg`} type="wechat">
                                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </button>
                            </QRPopover>
                            <QRPopover imagePath={`${basePath}/official-account.jpg`} type="official">
                                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                                    <Newspaper className="w-6 h-6" />
                                </button>
                            </QRPopover>
                        </div>
                        
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <p>© 2025 fishisnow. 用心分享技术与思考。</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
