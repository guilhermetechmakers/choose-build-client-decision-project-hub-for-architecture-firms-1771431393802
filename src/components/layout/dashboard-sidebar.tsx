import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSidebar } from '@/contexts/sidebar-context'
import {
  LayoutDashboard,
  FolderKanban,
  FileCheck,
  PlusCircle,
  MessageSquare,
  FileText,
  Calendar,
  LayoutTemplate,
  BarChart3,
  CreditCard,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  Menu,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const mainNav = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
  { to: '/dashboard/decisions', label: 'Decision Log', icon: FileCheck },
  { to: '/dashboard/decisions/new', label: 'Create Decision', icon: PlusCircle },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
  { to: '/dashboard/files', label: 'Files & Drawings', icon: FileText },
  { to: '/dashboard/meetings', label: 'Meetings', icon: Calendar },
  { to: '/dashboard/templates', label: 'Templates', icon: LayoutTemplate },
  { to: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { to: '/dashboard/billing', label: 'Billing', icon: CreditCard },
]

const bottomNav = [
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
  { to: '/dashboard/admin', label: 'Admin', icon: Users },
]

export function DashboardSidebar() {
  const { collapsed, setCollapsed } = useSidebar()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
      isActive
        ? 'bg-primary/10 text-primary'
        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
    )

  const NavList = ({ items }: { items: typeof mainNav }) => (
    <ul className="space-y-1">
      {items.map(({ to, label, icon: Icon }) => (
        <li key={to}>
          <NavLink to={to} className={linkClass} end={to === '/dashboard'}>
            <Icon className="h-5 w-5 shrink-0" aria-hidden />
            {(!collapsed || mobileOpen) && <span>{label}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full flex-col border-r border-border bg-card shadow-card transition-[width] duration-300 ease-in-out',
          collapsed && !mobileOpen ? 'w-[72px]' : 'w-64',
          'md:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
        aria-label="Main navigation"
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          {(!collapsed || mobileOpen) && (
            <NavLink to="/dashboard" className="font-semibold text-primary">
              Choose & Build
            </NavLink>
          )}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden md:flex"
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto p-3">
          <NavList items={mainNav} />
          <div className="mt-auto border-t border-border pt-3">
            <NavList items={bottomNav} />
          </div>
        </nav>
      </aside>
    </>
  )
}
