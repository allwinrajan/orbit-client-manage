import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

const TeamIntegration = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Code Integration</h1>
        <p className="text-muted-foreground mt-1">GitHub integration and code management</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            GitHub Integration
          </CardTitle>
          <CardDescription>Connect and manage code repositories</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">GitHub integration will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamIntegration;