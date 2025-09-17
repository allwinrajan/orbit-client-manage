import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Shield, 
  Users, 
  Key, 
  Settings,
  Lock,
  UserCheck,
  AlertTriangle,
  Plus
} from "lucide-react";

const AdminAccess = () => {
  const roles = [
    {
      name: "Admin",
      description: "Full system access with all privileges",
      permissions: ["All System Access", "User Management", "Financial Data", "System Settings"],
      userCount: 2,
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      name: "Team Leader",
      description: "Manage team members and project assignments",
      permissions: ["Team Management", "Project Assignment", "Progress Tracking", "Client Communication"],
      userCount: 5,
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      name: "Team Member",
      description: "Work on assigned projects and update progress",
      permissions: ["Project Access", "Time Tracking", "File Upload", "Basic Reporting"],
      userCount: 18,
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      name: "Client",
      description: "Access to own projects and support tickets",
      permissions: ["Project View", "Ticket Creation", "Billing View", "Communication"],
      userCount: 12,
      color: "bg-purple-100 text-purple-800 border-purple-200"
    }
  ];

  const users = [
    {
      name: "John Admin",
      email: "john@company.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
      avatar: ""
    },
    {
      name: "Sarah Manager",
      email: "sarah@company.com", 
      role: "Team Leader",
      status: "Active",
      lastLogin: "1 hour ago",
      avatar: ""
    },
    {
      name: "Mike Developer",
      email: "mike@company.com",
      role: "Team Member", 
      status: "Active",
      lastLogin: "30 minutes ago",
      avatar: ""
    },
    {
      name: "Client Corp",
      email: "contact@clientcorp.com",
      role: "Client",
      status: "Inactive",
      lastLogin: "2 days ago", 
      avatar: ""
    }
  ];

  const permissions = [
    { module: "User Management", admin: true, teamLead: false, member: false, client: false },
    { module: "Project Management", admin: true, teamLead: true, member: false, client: false },
    { module: "Financial Data", admin: true, teamLead: false, member: false, client: false },
    { module: "Team Assignment", admin: true, teamLead: true, member: false, client: false },
    { module: "Client Communication", admin: true, teamLead: true, member: false, client: true },
    { module: "Billing Access", admin: true, teamLead: false, member: false, client: true },
    { module: "System Settings", admin: true, teamLead: false, member: false, client: false }
  ];

  const getStatusVariant = (status: string) => {
    return status === 'Active' ? 'secondary' : 'outline';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Access Control</h1>
          <p className="text-muted-foreground mt-1">Manage user roles, permissions, and system access</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Security Settings
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Role Overview */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {roles.map((role) => (
          <Card key={role.name} className="border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{role.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {role.userCount} users
                    </div>
                  </div>
                </div>
              </div>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Permissions</h4>
                {role.permissions.map((permission) => (
                  <div key={permission} className="flex items-center gap-2 text-sm">
                    <Key className="h-3 w-3 text-primary" />
                    <span className="text-muted-foreground">{permission}</span>
                  </div>
                ))}
              </div>
              <Button size="sm" variant="outline" className="w-full mt-4">
                Manage Role
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Manage user accounts and access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.email} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground">{user.name}</p>
                        <Badge variant={getStatusVariant(user.status)}>
                          {user.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">Last login: {user.lastLogin}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      {user.role}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">
                        <Lock className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Permission Matrix */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              Permission Matrix
            </CardTitle>
            <CardDescription>Module access by role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2 text-xs font-medium text-muted-foreground">
                <div></div>
                <div className="text-center">Admin</div>
                <div className="text-center">Lead</div>
                <div className="text-center">Member</div>
              </div>
              {permissions.slice(0, 6).map((perm) => (
                <div key={perm.module} className="grid grid-cols-4 gap-2 items-center text-sm">
                  <div className="text-foreground">{perm.module}</div>
                  <div className="text-center">
                    {perm.admin ? <Badge variant="secondary" className="w-1 h-1 p-0 rounded-full"></Badge> : <div className="w-1 h-1 bg-muted rounded-full mx-auto"></div>}
                  </div>
                  <div className="text-center">
                    {perm.teamLead ? <Badge variant="secondary" className="w-1 h-1 p-0 rounded-full"></Badge> : <div className="w-1 h-1 bg-muted rounded-full mx-auto"></div>}
                  </div>
                  <div className="text-center">
                    {perm.member ? <Badge variant="secondary" className="w-1 h-1 p-0 rounded-full"></Badge> : <div className="w-1 h-1 bg-muted rounded-full mx-auto"></div>}
                  </div>
                </div>
              ))}
            </div>
            <Button size="sm" variant="outline" className="w-full mt-4">
              View Full Matrix
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Security Alerts
          </CardTitle>
          <CardDescription>Recent security events and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { type: "Warning", message: "User 'mike@company.com' attempted login from new location", time: "2 hours ago" },
              { type: "Info", message: "New user account created for 'newclient@example.com'", time: "1 day ago" },
              { type: "Success", message: "System security scan completed successfully", time: "2 days ago" }
            ].map((alert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === 'Warning' ? 'bg-yellow-500' : 
                  alert.type === 'Info' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
                <Badge variant="outline">{alert.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAccess;