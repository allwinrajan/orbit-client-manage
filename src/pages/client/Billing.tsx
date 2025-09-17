import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const ClientBilling = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Billing & Payments</h1>
        <p className="text-muted-foreground mt-1">Manage payments and view invoices</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Billing Overview
          </CardTitle>
          <CardDescription>Your invoices and payment history</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Client billing will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientBilling;