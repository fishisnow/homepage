"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, MessageCircle, Newspaper, Bot, Code, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { QRPopover } from "@/components/qr-dialog"
import { toast } from "sonner"

const projects = [
  {
    title: "Midscene Browser",
    description: "让 AI 替您操作浏览器的插件",
    link: "https://chromewebstore.google.com/detail/midscene-browser/nfpeeekdhenglhecglicddgmjiepbcph",
  },
  {
    title: "AI Agent Prompt Lab",
    description: "一个探索开源 AI Agent Prompt 原理的网站",
    link: "https://fishisnow.github.io/agents-chat-collection/index.html",
  },
  {
    title: "鱼你相知",
    description: "帮您的鱼缸选择合适的宠物鱼，趣味养鱼",
    link: "https://example.com/project3",
  },
]

const posts = [
  {
    title: "如何利用 AI 提升开发效率",
    date: "2024-03-20",
  },
  {
    title: "我的独立开发之路",
    date: "2024-03-19",
  },
  {
    title: "产品设计中的用户体验",
    date: "2024-03-18",
  },
  {
    title: "AI 时代的编程思维",
    date: "2024-03-17",
  },
  {
    title: "从零开始的项目实践",
    date: "2024-03-16",
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
    <div className="w-full">
      {/* Hero Section with About */}
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center">
        <div className="container px-4 mx-auto py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-start">
              <div className="relative shrink-0 w-[300px] h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={`${basePath}/icon1.jpg`}
                  alt="个人形象"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="300px"
                  priority
                />
              </div>
              <div className="flex-1 ml-12">
                <div className="mb-12">
                  <h1 className="text-left text-6xl font-bold tracking-tighter sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-6">
                    fishisnow
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    AI Native Coder | 一个还在重新学习，重塑思想的 AI 开发者
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://github.com/fishisnow" target="_blank">
                      <Button variant="outline" className="rounded-full">
                        <Github className="mr-2 h-4 w-4" />
                        Github
                      </Button>
                    </Link>
                    <QRPopover imagePath={`${basePath}/wechat.jpg`} type="wechat">
                      <Button 
                        variant="outline" 
                        className="rounded-full"
                        onClick={handleCopyWeChat}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WeChat
                      </Button>
                    </QRPopover>
                    <QRPopover imagePath={`${basePath}/official-account.jpg`} type="official">
                      <Button 
                        variant="outline" 
                        className="rounded-full"
                        onClick={handleCopyOfficial}
                      >
                        <Newspaper className="mr-2 h-4 w-4" />
                        公众号
                      </Button>
                    </QRPopover>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      你好! 我是一名 AI Native Coder，专注于使用 AI 技术开发创新应用。
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl flex items-center space-x-4 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                          <Bot className="h-6 w-6 text-blue-500" />
                        </div>
                        <span className="font-medium">AI 应用开发</span>
                      </div>
                      <div className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl flex items-center space-x-4 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                          <Code className="h-6 w-6 text-green-500" />
                        </div>
                        <span className="font-medium">全栈开发</span>
                      </div>
                      <div className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl flex items-center space-x-4 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                        <div className="p-3 bg-purple-500/10 rounded-lg">
                          <Palette className="h-6 w-6 text-purple-500" />
                        </div>
                        <span className="font-medium">产品设计</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-16">
            <div className="relative">
              <h2 className="text-3xl font-bold text-center">项目作品</h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    了解更多
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-16">
            <div className="relative">
              <h2 className="text-3xl font-bold text-center">最新文章</h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div className="relative">
              <div className="flex flex-col space-y-4">
                {posts.map((post, index) => (
                  <Card 
                    key={index}
                    className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-none transform transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80 hover:shadow-md"
                  >
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg hover:text-blue-500 transition-colors line-clamp-1">
                          {post.title}
                        </CardTitle>
                        <span className="text-sm text-gray-500 shrink-0 ml-4">{post.date}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="https://mp.weixin.qq.com/你的公众号" 
                target="_blank"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors group"
              >
                <span className="mr-2 group-hover:mr-3 transition-all">查看更多文章</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
