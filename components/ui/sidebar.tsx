"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  collapsible: "icon" | "full" | "none"
}>({
  open: true,
  setOpen: () => {},
  collapsible: "none",
})

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

const SidebarProviderContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: true,
  setOpen: () => {},
})

export function useSidebarProvider() {
  const context = React.useContext(SidebarProviderContext)
  if (!context) {
    throw new Error("useSidebarProvider must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
}

export function SidebarProvider({ children, defaultOpen = true, ...props }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <SidebarProviderContext.Provider value={{ open, setOpen }}>
      <div {...props} className={cn("grid grid-cols-[auto_1fr]", props.className)}>
        {children}
      </div>
    </SidebarProviderContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: "icon" | "full" | "none"
  defaultOpen?: boolean
}

export function Sidebar({ children, collapsible = "full", defaultOpen = true, className, ...props }: SidebarProps) {
  const { open: providerOpen, setOpen: setProviderOpen } = React.useContext(SidebarProviderContext)
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)

  const open = collapsible === "none" ? true : providerOpen
  const setOpen = setProviderOpen

  return (
    <SidebarContext.Provider value={{ open, setOpen, collapsible }}>
      <div
        data-sidebar="root"
        className={cn(
          "flex h-full flex-col",
          collapsible === "icon" && "transition-[width]",
          collapsible === "icon" && (open ? "w-[var(--sidebar-width)]" : "w-[var(--sidebar-width-icon)]"),
          collapsible === "full" && "transition-transform",
          collapsible === "full" && (open ? "translate-x-0" : "-translate-x-full"),
          className,
        )}
        {...props}
      >
        <div data-sidebar="sidebar" className="flex h-full flex-col">
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return <div className={cn("px-3 py-2", className)} {...props} />
}

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return <div className={cn("mt-auto px-3 py-2", className)} {...props} />
}

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <div className={cn("px-3 py-2", className)} {...props} />
}

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarGroupContent({ className, ...props }: SidebarGroupContentProps) {
  return <div className={cn("space-y-1", className)} {...props} />
}

interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <div className={cn("space-y-1", className)} {...props} />
}

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <div className={cn("", className)} {...props} />
}

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  tooltip?: React.ComponentProps<typeof TooltipContent> & {
    children: React.ReactNode
  }
  asChild?: boolean
}

const sidebarMenuButtonVariants = cva(
  "group relative flex w-full cursor-default items-center rounded-md px-2 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      },
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-10",
      },
      isActive: {
        true: "bg-sidebar-accent text-sidebar-accent-foreground",
        false: "text-sidebar-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
)

export function SidebarMenuButton({
  className,
  variant,
  size,
  isActive,
  tooltip,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  const { open, collapsible } = useSidebar()
  const Component = asChild
    ? React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ ...props }, ref) =>
        React.cloneElement(props.children as React.ReactElement, { ...props, ref }),
      )
    : Button

  if (collapsible === "icon" && !open && tooltip) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Component
              variant="ghost"
              className={cn(
                sidebarMenuButtonVariants({ variant, size, isActive, className }),
                "flex h-9 w-9 items-center justify-center p-0",
              )}
              {...props}
            >
              {props.children && React.isValidElement(props.children) && props.children.props.children
                ? React.Children.toArray(props.children.props.children)[0]
                : React.Children.toArray(props.children)[0]}
            </Component>
          </TooltipTrigger>
          <TooltipContent side="right" {...tooltip} />
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Component
      variant="ghost"
      className={cn(sidebarMenuButtonVariants({ variant, size, isActive, className }))}
      {...props}
    />
  )
}

interface SidebarInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return <Input className={cn("h-8", className)} {...props} />
}

interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, setOpen } = useSidebarProvider()

  return (
    <Button variant="ghost" size="icon" className={cn("h-9 w-9", className)} onClick={() => setOpen(!open)} {...props}>
      {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      <span className="sr-only">{open ? "Close sidebar" : "Open sidebar"}</span>
    </Button>
  )
}

interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return <div className={cn("flex h-full flex-col", className)} {...props} />
}

