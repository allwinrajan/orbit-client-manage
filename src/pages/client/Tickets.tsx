import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const ClientTickets = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Support Tickets</h1>
        <p className="text-muted-foreground mt-1">Create and track support requests</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            My Tickets
          </CardTitle>
          <CardDescription>Your support requests and communication</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Client tickets will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientTickets;