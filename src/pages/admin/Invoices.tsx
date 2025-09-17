import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  FileText, 
  Download, 
  Send, 
  Plus,
  Calendar,
  DollarSign,
  User,
  Eye
} from "lucide-react";

const AdminInvoices = () => {
  const invoices = [
    {
      id: "INV-2024-001",
      client: "TechCorp Inc.",
      contact: "John Smith",
      project: "E-commerce Platform",
      amount: "$15,000.00",
      status: "Paid",
      issueDate: "2024-10-15",
      dueDate: "2024-11-15",
      paidDate: "2024-11-12",
      description: "Development services for Q4 2024"
    },
    {
      id: "INV-2024-002",
      client: "FinanceHub", 
      contact: "Sarah Johnson",
      project: "Mobile Banking App",
      amount: "$22,500.00",
      status: "Pending",
      issueDate: "2024-10-20",
      dueDate: "2024-11-20",
      paidDate: "",
      description: "Phase 1 development and UI design"
    },
    {
      id: "INV-2024-003",
      client: "MedTech Solutions",
      contact: "Dr. Michael Brown", 
      project: "Healthcare Portal",
      amount: "$8,750.00",
      status: "Overdue",
      issueDate: "2024-09-10",
      dueDate: "2024-11-10",
      paidDate: "",
      description: "Backend development and API integration"
    },
    {
      id: "INV-2024-004",
      client: "StartupXYZ",
      contact: "Alex Rivera",
      project: "MVP Development",
      amount: "$12,000.00", 
      status: "Draft",
      issueDate: "2024-11-16",
      dueDate: "2024-12-16",
      paidDate: "",
      description: "Initial development phase for MVP"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'secondary';
      case 'Pending':
        return 'outline';
      case 'Overdue':
        return 'destructive';
      case 'Draft':
        return 'default';
      default:
        return 'outline';
    }
  };

  const totalAmount = invoices.reduce((sum, invoice) => {
    return sum + parseFloat(invoice.amount.replace('$', '').replace(',', ''));
  }, 0);

  const paidAmount = invoices
    .filter(invoice => invoice.status === 'Paid')
    .reduce((sum, invoice) => {
      return sum + parseFloat(invoice.amount.replace('$', '').replace(',', ''));
    }, 0);

  const pendingAmount = invoices
    .filter(invoice => invoice.status === 'Pending' || invoice.status === 'Overdue')
    .reduce((sum, invoice) => {
      return sum + parseFloat(invoice.amount.replace('$', '').replace(',', ''));
    }, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Invoice Management</h1>
          <p className="text-muted-foreground mt-1">Create, send, and track client invoices</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">${totalAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{invoices.length} invoices</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${paidAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{Math.round((paidAmount / totalAmount) * 100)}% collected</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{Math.round((pendingAmount / totalAmount) * 100)}% pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search invoices by ID, client, project, or amount..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Invoices List */}
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <Card key={invoice.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-bold text-foreground">
                      {invoice.id}
                    </span>
                    <Badge variant={getStatusVariant(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{invoice.client}</CardTitle>
                  <CardDescription>{invoice.project}</CardDescription>
                  <p className="text-sm text-muted-foreground">{invoice.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground mb-2">{invoice.amount}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                    {invoice.status !== 'Paid' && (
                      <Button size="sm" variant="outline">
                        <Send className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p className="text-muted-foreground">{invoice.contact}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Issue Date</p>
                    <p className="text-muted-foreground">{invoice.issueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Due Date</p>
                    <p className="text-muted-foreground">{invoice.dueDate}</p>
                  </div>
                </div>
                {invoice.paidDate && (
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Paid Date</p>
                      <p className="text-muted-foreground">{invoice.paidDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminInvoices;