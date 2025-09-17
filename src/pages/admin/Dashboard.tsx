import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FolderOpen, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  DollarSign
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Active Clients", value: "24", icon: Users, change: "+12%", color: "text-blue-600" },
    { title: "Active Projects", value: "18", icon: FolderOpen, change: "+8%", color: "text-green-600" },
    { title: "Open Tickets", value: "7", icon: MessageSquare, change: "-5%", color: "text-yellow-600" },
    { title: "Revenue", value: "$54,200", icon: DollarSign, change: "+23%", color: "text-purple-600" },
  ];

  const recentProjects = [
    { name: "E-commerce Platform", client: "TechCorp Inc.", status: "In Progress", progress: 75, deadline: "Dec 15, 2024" },
    { name: "Mobile Banking App", client: "FinanceHub", status: "Planning", progress: 25, deadline: "Jan 20, 2025" },
    { name: "Healthcare Portal", client: "MedTech Solutions", status: "Testing", progress: 90, deadline: "Nov 30, 2024" },
  ];

  const recentTickets = [
    { id: "#TK001", title: "Feature Request: Dark Mode", client: "TechCorp Inc.", priority: "Medium", status: "Open" },
    { id: "#TK002", title: "Bug: Payment Gateway Issue", client: "FinanceHub", priority: "High", status: "In Progress" },
    { id: "#TK003", title: "Enhancement: User Dashboard", client: "MedTech Solutions", priority: "Low", status: "Resolved" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your projects, teams, and clients from here</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Report</Button>
          <Button>New Project</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              Recent Projects
            </CardTitle>
            <CardDescription>Track progress of ongoing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-foreground">{project.name}</h4>
                      <Badge variant={project.status === 'In Progress' ? 'default' : project.status === 'Testing' ? 'secondary' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {project.deadline}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tickets */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Recent Tickets
            </CardTitle>
            <CardDescription>Latest support requests from clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-muted-foreground">{ticket.id}</span>
                      <Badge 
                        variant={
                          ticket.priority === 'High' ? 'destructive' : 
                          ticket.priority === 'Medium' ? 'default' : 
                          'secondary'
                        }
                      >
                        {ticket.priority}
                      </Badge>
                      <Badge 
                        variant={
                          ticket.status === 'Open' ? 'outline' : 
                          ticket.status === 'In Progress' ? 'default' : 
                          'secondary'
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{ticket.title}</h4>
                    <p className="text-sm text-muted-foreground">{ticket.client}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {ticket.status === 'Resolved' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;