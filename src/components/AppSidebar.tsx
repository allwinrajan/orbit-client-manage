import { 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  CreditCard, 
  Receipt, 
  UserCheck, 
  Settings,
  Building2,
  Shield,
  GitBranch,
  Calendar,
  BarChart3
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const adminItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Clients", url: "/admin/clients", icon: Building2 },
  { title: "Projects", url: "/admin/projects", icon: FolderOpen },
  { title: "Teams", url: "/admin/teams", icon: Users },
  { title: "Tickets", url: "/admin/tickets", icon: MessageSquare },
  { title: "Billing", url: "/admin/billing", icon: CreditCard },
  { title: "Invoices", url: "/admin/invoices", icon: Receipt },
  { title: "Reports", url: "/admin/reports", icon: BarChart3 },
  { title: "Access Control", url: "/admin/access", icon: Shield },
];

const teamItems = [
  { title: "Dashboard", url: "/team", icon: LayoutDashboard },
  { title: "Projects", url: "/team/projects", icon: FolderOpen },
  { title: "Calendar", url: "/team/calendar", icon: Calendar },
  { title: "Integration", url: "/team/integration", icon: GitBranch },
];

const clientItems = [
  { title: "Dashboard", url: "/client", icon: LayoutDashboard },
  { title: "Projects", url: "/client/projects", icon: FolderOpen },
  { title: "Tickets", url: "/client/tickets", icon: MessageSquare },
  { title: "Billing", url: "/client/billing", icon: CreditCard },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine user role based on path
  const getUserRole = () => {
    if (currentPath.startsWith('/admin')) return 'admin';
    if (currentPath.startsWith('/team')) return 'team';
    if (currentPath.startsWith('/client')) return 'client';
    return 'admin'; // default
  };

  const role = getUserRole();
  const items = role === 'admin' ? adminItems : role === 'team' ? teamItems : clientItems;

  const isActive = (path: string) => currentPath === path;
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive 
        ? "bg-accent text-accent-foreground font-medium" 
        : "text-muted-foreground"
    }`;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-sidebar-border bg-sidebar-background`}>
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 px-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PM</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-foreground">ProjectMaster</h1>
                <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2"}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <div className="mt-auto pt-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/settings" className={getNavCls}>
                  <Settings className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">Settings</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}