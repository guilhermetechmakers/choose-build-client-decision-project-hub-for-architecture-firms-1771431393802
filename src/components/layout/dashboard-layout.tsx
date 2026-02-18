import { Outlet } from 'react-router-dom'
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar'
import { useSidebar } from '@/contexts/sidebar-context'
import { cn } from '@/lib/utils'

export function DashboardLayout() {
  const { collapsed } = useSidebar()
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main
        className={cn(
          'min-h-screen transition-[margin] duration-300',
          'pt-14 md:pt-0',
          collapsed ? 'md:pl-[72px]' : 'md:pl-64'
        )}
      >
        <div className="mx-auto max-w-[1400px] p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
