import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FolderOpen,
  DollarSign,
  Calendar,
  Download,
  Filter,
  PieChart
} from "lucide-react";

const AdminReports = () => {
  const reportCategories = [
    {
      title: "Financial Reports",
      description: "Revenue, billing, and financial analytics",
      icon: DollarSign,
      reports: [
        { name: "Monthly Revenue Report", lastGenerated: "Nov 15, 2024", status: "Ready" },
        { name: "Client Payment Analysis", lastGenerated: "Nov 14, 2024", status: "Ready" },
        { name: "Project Profitability", lastGenerated: "Nov 10, 2024", status: "Processing" }
      ]
    },
    {
      title: "Project Reports", 
      description: "Project progress, milestones, and delivery metrics",
      icon: FolderOpen,
      reports: [
        { name: "Project Status Dashboard", lastGenerated: "Nov 16, 2024", status: "Ready" },
        { name: "Milestone Completion Rate", lastGenerated: "Nov 15, 2024", status: "Ready" },
        { name: "Resource Utilization", lastGenerated: "Nov 12, 2024", status: "Ready" }
      ]
    },
    {
      title: "Team Performance",
      description: "Team productivity and performance analytics", 
      icon: Users,
      reports: [
        { name: "Team Productivity Report", lastGenerated: "Nov 15, 2024", status: "Ready" },
        { name: "Individual Performance", lastGenerated: "Nov 14, 2024", status: "Scheduled" },
        { name: "Workload Distribution", lastGenerated: "Nov 13, 2024", status: "Ready" }
      ]
    },
    {
      title: "Client Analytics",
      description: "Client satisfaction and engagement metrics",
      icon: BarChart3,
      reports: [
        { name: "Client Satisfaction Survey", lastGenerated: "Nov 10, 2024", status: "Ready" },
        { name: "Support Ticket Analysis", lastGenerated: "Nov 12, 2024", status: "Ready" },
        { name: "Client Retention Report", lastGenerated: "Nov 8, 2024", status: "Processing" }
      ]
    }
  ];

  const quickStats = [
    { title: "Total Reports Generated", value: "156", change: "+12", icon: BarChart3 },
    { title: "Reports This Month", value: "23", change: "+5", icon: Calendar },
    { title: "Automated Reports", value: "89%", change: "+3%", icon: TrendingUp },
    { title: "Export Downloads", value: "67", change: "+18", icon: Download }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'secondary';
      case 'Processing':
        return 'default';
      case 'Scheduled':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Generate and manage business intelligence reports</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Report Builder
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button>
            <BarChart3 className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> this month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Categories */}
      <div className="grid lg:grid-cols-2 gap-6">
        {reportCategories.map((category) => (
          <Card key={category.title} className="border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report) => (
                  <div key={report.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-medium text-foreground">{report.name}</h4>
                        <Badge variant={getStatusVariant(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Last generated: {report.lastGenerated}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Recent Report Activity
          </CardTitle>
          <CardDescription>Latest report generations and downloads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Generated", report: "Monthly Revenue Report", user: "Admin", time: "2 hours ago" },
              { action: "Downloaded", report: "Project Status Dashboard", user: "John Doe", time: "4 hours ago" },
              { action: "Scheduled", report: "Team Productivity Report", user: "Admin", time: "6 hours ago" },
              { action: "Generated", report: "Client Satisfaction Survey", user: "Sarah Wilson", time: "1 day ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-medium text-foreground">
                      <span className="text-primary">{activity.user}</span> {activity.action.toLowerCase()} 
                      <span className="font-semibold"> {activity.report}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <Badge variant="outline">{activity.action}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;