"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Github, Newspaper} from "lucide-react"
import Link from "next/link"
import {QRPopover} from "@/components/qr-dialog"
import {toast} from "sonner"

const projects = [
    {
        title: "AI Image & Video Generator",
        description: "AI 图片和视频创作平台",
        link: "https://pixae.app",
        tech: ["AI", "图片", "视频"]
    },
    {
        title: "Square Face Generator",
        description: "一个复古 flash 技术的头像生成器现代重制版",
        link: "https://squareface.me",
        tech: ["头像生成", "Flash"]
    },
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
    const handleCopyOfficial = () => {
        navigator.clipboard.writeText("fishisnow").then(() => {
            toast.success("公众号已复制")
        })
    }

    const basePath = process.env.NODE_ENV === 'production' ? '/homepage' : ''

    return (
        <div className="w-full min-h-screen">
            {/* Hero Section - Enhanced */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-background via-secondary/20 to-muted overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-20 right-20 w-24 h-24 border border-accent/30 rounded-full animate-float"></div>
                </div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
                
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                            👋 欢迎来到我的数字空间
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 calligraphy bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            fishisnow
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                            风起于青萍之末 浪成于微澜之间
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="https://github.com/fishisnow" target="_blank">
                                <Button variant="outline" size="lg" className="group border-2 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform"/>
                                    Github
                                </Button>
                            </Link>
                            <Link href="https://x.com/fishisnowx" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="group border-2 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                                    <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                    Twitter
                                </Button>
                            </Link>
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

            {/* Projects Section - Enhanced */}
            <section id="projects" className="py-24 bg-white dark:bg-gray-900 ink-wash-bg relative">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 calligraphy bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                项目作品
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                AI writes code. Humans own the bugs.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => {
                                const cardContent = (
                                    <Card className="group hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent/50 bg-card/80 backdrop-blur-md rounded-2xl overflow-hidden hover:-translate-y-2 shadow-lg flex flex-col h-full cursor-pointer">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl font-bold calligraphy group-hover:text-accent transition-colors mb-2">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-base leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col justify-end pb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-gradient-to-r from-muted/60 to-secondary/40 dark:from-muted/30 dark:to-secondary/20 text-foreground text-sm rounded-full font-medium border border-accent/20 dark:border-accent/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                );

                                if (project.qrCode) {
                                    return (
                                        <QRPopover key={index} imagePath={`${basePath}/${project.link}`} type="wechat" useDialog={true}>
                                            {cardContent}
                                        </QRPopover>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        {cardContent}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2 calligraphy bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                fishisnow
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
                                探索 AI 时代的开发方式与思维转变，分享技术实践与创新思考
                            </p>
                        </div>
                        
                        <div className="flex justify-center items-center space-x-6">
                            <Link 
                                href="https://github.com/fishisnow" 
                                target="_blank"
                                className="flex-shrink-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://x.com/fishisnowx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </Link>
                            <div className="flex-shrink-0">
                                <QRPopover imagePath={`${basePath}/official-account.jpg`} type="official">
                                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                                        <Newspaper className="w-5 h-5" />
                                    </button>
                                </QRPopover>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
