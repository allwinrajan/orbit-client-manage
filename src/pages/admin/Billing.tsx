import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  CreditCard,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const AdminBilling = () => {
  const billingStats = [
    { title: "Total Revenue", value: "$124,500", change: "+15%", icon: DollarSign },
    { title: "Pending Invoices", value: "8", change: "-2", icon: FileText },
    { title: "Overdue Payments", value: "3", change: "+1", icon: AlertCircle },
    { title: "This Month", value: "$32,200", change: "+23%", icon: TrendingUp },
  ];

  const recentInvoices = [
    {
      id: "INV-2024-001",
      client: "TechCorp Inc.",
      project: "E-commerce Platform",
      amount: "$15,000",
      status: "Paid",
      dueDate: "2024-11-15",
      paidDate: "2024-11-12"
    },
    {
      id: "INV-2024-002", 
      client: "FinanceHub",
      project: "Mobile Banking App",
      amount: "$22,500",
      status: "Pending",
      dueDate: "2024-11-20",
      paidDate: ""
    },
    {
      id: "INV-2024-003",
      client: "MedTech Solutions",
      project: "Healthcare Portal",
      amount: "$8,750",
      status: "Overdue", 
      dueDate: "2024-11-10",
      paidDate: ""
    }
  ];

  const paymentMethods = [
    { type: "Bank Transfer", count: 12, percentage: 60 },
    { type: "Credit Card", count: 6, percentage: 30 },
    { type: "PayPal", count: 2, percentage: 10 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'secondary';
      case 'Pending':
        return 'outline';
      case 'Overdue':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing Management</h1>
          <p className="text-muted-foreground mt-1">Track revenue, invoices, and payment status</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Generate Report</Button>
          <Button variant="outline">Payment Settings</Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingStats.map((stat) => (
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
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Invoices */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Invoices
            </CardTitle>
            <CardDescription>Latest billing transactions and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-muted-foreground bg-background px-2 py-1 rounded">
                        {invoice.id}
                      </span>
                      <Badge variant={getStatusVariant(invoice.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(invoice.status)}
                          {invoice.status}
                        </div>
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{invoice.client}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{invoice.project}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Due: {invoice.dueDate}
                      </div>
                      {invoice.paidDate && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Paid: {invoice.paidDate}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">{invoice.amount}</div>
                    <Button size="sm" variant="outline" className="mt-2">
                      View Invoice
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Payment Methods
            </CardTitle>
            <CardDescription>Distribution of payment types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{method.type}</span>
                    <span className="text-sm text-muted-foreground">{method.count} invoices</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${method.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">{method.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminBilling;