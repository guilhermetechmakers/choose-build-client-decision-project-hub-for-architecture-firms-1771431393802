import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Landing } from '@/pages/landing'
import { Login } from '@/pages/login'
import { Signup } from '@/pages/signup'
import { ForgotPassword } from '@/pages/forgot-password'
import { VerifyEmail } from '@/pages/verify-email'
import { DashboardOverview } from '@/pages/dashboard/overview'
import { DashboardProjects } from '@/pages/dashboard/projects'
import { ProjectBoard } from '@/pages/dashboard/project-board'
import { DashboardDecisions } from '@/pages/dashboard/decisions'
import { DecisionDetail } from '@/pages/dashboard/decision-detail'
import { CreateDecision } from '@/pages/dashboard/create-decision'
import { DashboardMessages } from '@/pages/dashboard/messages'
import { DashboardFiles } from '@/pages/dashboard/files'
import { DashboardMeetings } from '@/pages/dashboard/meetings'
import { DashboardTemplates } from '@/pages/dashboard/templates'
import { DashboardReports } from '@/pages/dashboard/reports'
import { DashboardBilling } from '@/pages/dashboard/billing'
import { DashboardSettings } from '@/pages/dashboard/settings'
import { DashboardProfile } from '@/pages/dashboard/profile'
import { DashboardAdmin } from '@/pages/dashboard/admin'
import { AdminUsers } from '@/pages/dashboard/admin-users'
import { NotFound } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'
import { Help } from '@/pages/help'
import { Privacy } from '@/pages/privacy'
import { Terms } from '@/pages/terms'
import LoginSignupPage from '@/pages/Login/Signup'

export const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login-/-signup', element: <LoginSignupPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/help', element: <Help /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'projects', element: <DashboardProjects /> },
      { path: 'projects/new', element: <DashboardProjects /> },
      { path: 'projects/:projectId', element: <ProjectBoard /> },
      { path: 'decisions', element: <DashboardDecisions /> },
      { path: 'decisions/new', element: <CreateDecision /> },
      { path: 'decisions/:decisionId', element: <DecisionDetail /> },
      { path: 'messages', element: <DashboardMessages /> },
      { path: 'files', element: <DashboardFiles /> },
      { path: 'meetings', element: <DashboardMeetings /> },
      { path: 'templates', element: <DashboardTemplates /> },
      { path: 'reports', element: <DashboardReports /> },
      { path: 'billing', element: <DashboardBilling /> },
      { path: 'settings', element: <DashboardSettings /> },
      { path: 'profile', element: <DashboardProfile /> },
      { path: 'admin', element: <DashboardAdmin /> },
      { path: 'admin/users', element: <AdminUsers /> },
    ],
  },
  { path: '/404', element: <NotFound /> },
  { path: '/500', element: <ErrorPage /> },
  { path: '*', element: <NotFound /> },
])
