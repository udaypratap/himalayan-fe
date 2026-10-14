"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Building2,
  Leaf,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const adminItems = [
  { title: "Overview", url: "/admin", icon: LayoutDashboard },
  { title: "Franchises", url: "/admin/franchises", icon: Building2 },
  { title: "Agents", url: "/admin/agents", icon: Users },
]

const agentItems = [
  { title: "Overview", url: "/agent", icon: LayoutDashboard },
  { title: "Customers", url: "/agent/customers", icon: Users },
  { title: "Orders", url: "/agent/orders", icon: ShoppingCart },
  { title: "Commission", url: "/agent/commission", icon: Wallet },
]

export function AppSidebar() {
  const pathname = usePathname()

  function MenuItems({ items }: { items: typeof adminItems }) {
    return (
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={<Link href={item.url} />}
                isActive={isActive}
                className={
                  isActive
                    ? "h-11 rounded-xl bg-emerald-800 text-white hover:bg-emerald-800 hover:text-white"
                    : "h-11 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
                }
              >
                <item.icon className="size-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    )
  }

  return (
    <Sidebar className="border-r border-emerald-950/10">
      <SidebarHeader className="p-3">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 p-4 text-white shadow-lg shadow-emerald-950/15">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/15 p-2">
              <Leaf className="size-5" />
            </div>

            <div>
              <p className="text-sm font-semibold">Himalayan Ayurvedic</p>
              <p className="text-xs text-emerald-100">Business Platform</p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 pt-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold tracking-wider text-emerald-800/70 uppercase">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItems items={adminItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold tracking-wider text-emerald-800/70 uppercase">
            Distributor Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItems items={agentItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-11 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-900">
              <Settings className="size-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}