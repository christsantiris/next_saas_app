import { ReactNode } from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Feature({
    children,
    className,
  }: {
    children: ReactNode
    className?: string
  }) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
        <span>{children}</span>
      </div>
    )
  }