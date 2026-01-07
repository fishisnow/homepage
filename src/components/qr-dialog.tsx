"use client"

import Image from "next/image"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface QRPopoverProps {
  children: React.ReactNode
  imagePath: string
  type: "wechat" | "official"
  useDialog?: boolean
}

export function QRPopover({ children, imagePath, type, useDialog = false }: QRPopoverProps) {
  const title = type === "wechat" ? "微信二维码" : "公众号二维码"
  
  // 如果 useDialog 为 true，使用 Dialog 在屏幕中央显示
  if (useDialog) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center p-4">
            <DialogTitle className="text-lg font-semibold mb-4">{title}</DialogTitle>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4">
              <Image
                src={imagePath}
                alt={title}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  // 默认使用 Tooltip（用于微信和公众号按钮）
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          sideOffset={20} 
          align="center"
          className="p-0 border-none bg-transparent z-[100]"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-4 transform transition-all">
            <Image
              src={imagePath}
              alt={title}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 