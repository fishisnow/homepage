"use client"

import Image from "next/image"
import * as React from "react"
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
}

export function QRPopover({ children, imagePath, type }: QRPopoverProps) {
  const title = type === "wechat" ? "微信二维码" : "公众号二维码"
  
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={10} className="p-0 border-none bg-transparent">
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