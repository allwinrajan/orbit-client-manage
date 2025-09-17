import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";

// Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminClients from "./pages/admin/Clients";
import AdminProjects from "./pages/admin/Projects";
import AdminTeams from "./pages/admin/Teams";
import AdminTickets from "./pages/admin/Tickets";
import AdminBilling from "./pages/admin/Billing";
import AdminInvoices from "./pages/admin/Invoices";
import AdminReports from "./pages/admin/Reports";
import AdminAccess from "./pages/admin/Access";

import TeamDashboard from "./pages/team/Dashboard";
import TeamProjects from "./pages/team/Projects";
import TeamCalendar from "./pages/team/Calendar";
import TeamIntegration from "./pages/team/Integration";

import ClientDashboard from "./pages/client/Dashboard";
import ClientProjects from "./pages/client/Projects";
import ClientTickets from "./pages/client/Tickets";
import ClientBilling from "./pages/client/Billing";

import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              <header className="h-16 border-b border-border bg-background flex items-center px-6">
                <SidebarTrigger />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-foreground">Project Management System</h2>
                </div>
              </header>
              <div className="flex-1 p-6">
                <Routes>
                  {/* Default redirect */}
                  <Route path="/" element={<AdminDashboard />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/clients" element={<AdminClients />} />
                  <Route path="/admin/projects" element={<AdminProjects />} />
                  <Route path="/admin/teams" element={<AdminTeams />} />
                  <Route path="/admin/tickets" element={<AdminTickets />} />
                  <Route path="/admin/billing" element={<AdminBilling />} />
                  <Route path="/admin/invoices" element={<AdminInvoices />} />
                  <Route path="/admin/reports" element={<AdminReports />} />
                  <Route path="/admin/access" element={<AdminAccess />} />
                  
                  {/* Team Routes */}
                  <Route path="/team" element={<TeamDashboard />} />
                  <Route path="/team/projects" element={<TeamProjects />} />
                  <Route path="/team/calendar" element={<TeamCalendar />} />
                  <Route path="/team/integration" element={<TeamIntegration />} />
                  
                  {/* Client Routes */}
                  <Route path="/client" element={<ClientDashboard />} />
                  <Route path="/client/projects" element={<ClientProjects />} />
                  <Route path="/client/tickets" element={<ClientTickets />} />
                  <Route path="/client/billing" element={<ClientBilling />} />
                  
                  {/* Settings */}
                  <Route path="/settings" element={<Settings />} />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
