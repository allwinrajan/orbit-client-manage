import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Building2, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Users,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminClients = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Inc.",
      email: "contact@techcorp.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      projects: 3,
      status: "Active",
      joinDate: "Jan 15, 2024",
      revenue: "$32,500",
      contact: "John Smith"
    },
    {
      id: 2,
      name: "FinanceHub",
      email: "info@financehub.com",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      projects: 2,
      status: "Active",
      joinDate: "Mar 8, 2024",
      revenue: "$18,900",
      contact: "Sarah Johnson"
    },
    {
      id: 3,
      name: "MedTech Solutions",
      email: "hello@medtech.com",
      phone: "+1 (555) 456-7890",
      location: "Boston, MA",
      projects: 1,
      status: "Pending",
      joinDate: "Oct 22, 2024",
      revenue: "$2,800",
      contact: "Dr. Michael Brown"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Management</h1>
          <p className="text-muted-foreground mt-1">Manage and track all your clients</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export</Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clients by name, email, or location..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <CardDescription>{client.contact}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Client</DropdownMenuItem>
                    <DropdownMenuItem>Create Project</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Remove Client</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={client.status === 'Active' ? 'default' : 'outline'}>
                  {client.status}
                </Badge>
                <span className="text-sm font-semibold text-primary">{client.revenue}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{client.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {client.joinDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {client.projects} project{client.projects !== 1 ? 's' : ''}
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  View Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminClients;