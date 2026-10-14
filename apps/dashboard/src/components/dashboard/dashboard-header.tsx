import { Bell, CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b border-emerald-950/10 bg-white/80 px-4 backdrop-blur">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />

      <div className="flex-1">
        <p className="text-sm font-semibold text-emerald-950">
          Business Operations
        </p>
        <p className="hidden text-xs text-slate-500 sm:block">
          Himalayan Ayurvedic Platform
        </p>
      </div>

      <div className="hidden items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-900 md:flex">
        <CalendarDays className="size-4" />
        23 September 2026
      </div>

      <button className="rounded-xl p-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-900">
        <Bell className="size-5" />
      </button>

      <Avatar className="size-9 ring-2 ring-emerald-100">
        <AvatarFallback className="bg-emerald-800 text-xs text-white">
          SA
        </AvatarFallback>
      </Avatar>
    </header>
  )
}