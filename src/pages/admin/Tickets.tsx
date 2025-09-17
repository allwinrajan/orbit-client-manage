import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Clock, 
  User,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

const AdminTickets = () => {
  const tickets = [
    {
      id: "TK001",
      title: "Feature Request: Dark Mode Implementation",
      description: "Client requested dark mode toggle for the dashboard interface",
      client: "TechCorp Inc.",
      contact: "John Smith",
      priority: "Medium",
      status: "Open",
      category: "Feature Request",
      created: "2024-11-15",
      updated: "2024-11-16",
      assignee: "Development Team"
    },
    {
      id: "TK002", 
      title: "Bug: Payment Gateway Integration Issue",
      description: "Users experiencing errors during payment processing on checkout",
      client: "FinanceHub",
      contact: "Sarah Johnson",
      priority: "High",
      status: "In Progress",
      category: "Bug Report",
      created: "2024-11-14",
      updated: "2024-11-16",
      assignee: "Backend Team"
    },
    {
      id: "TK003",
      title: "Enhancement: User Dashboard Analytics",
      description: "Add advanced analytics charts to user dashboard for better insights",
      client: "MedTech Solutions",
      contact: "Dr. Michael Brown",
      priority: "Low",
      status: "Resolved",
      category: "Enhancement",
      created: "2024-11-10",
      updated: "2024-11-15",
      assignee: "Frontend Team"
    },
    {
      id: "TK004",
      title: "Support: Integration Documentation Request",
      description: "Client needs detailed API documentation for third-party integrations",
      client: "TechCorp Inc.",
      contact: "John Smith",
      priority: "Medium",
      status: "Rejected",
      category: "Support",
      created: "2024-11-12",
      updated: "2024-11-14",
      assignee: "Technical Writing"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'Resolved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Open':
        return 'outline';
      case 'In Progress':
        return 'default';
      case 'Resolved':
        return 'secondary';
      case 'Rejected':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ticket Management</h1>
          <p className="text-muted-foreground mt-1">Handle client support requests and tickets</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Tickets</Button>
          <Button variant="outline">Ticket Rules</Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets by ID, title, client, or description..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                      {ticket.id}
                    </span>
                    <Badge variant={getPriorityVariant(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                    <Badge variant={getStatusVariant(ticket.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </div>
                    </Badge>
                    <Badge variant="outline">
                      {ticket.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{ticket.title}</CardTitle>
                  <CardDescription className="text-base">
                    {ticket.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  {ticket.status === 'Open' && (
                    <>
                      <Button size="sm" variant="outline">Accept</Button>
                      <Button size="sm" variant="outline">Reject</Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{ticket.client}</p>
                    <p className="text-muted-foreground">{ticket.contact}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Created</p>
                    <p className="text-muted-foreground">{ticket.created}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Last Updated</p>
                    <p className="text-muted-foreground">{ticket.updated}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Assignee</p>
                    <p className="text-muted-foreground">{ticket.assignee}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminTickets;