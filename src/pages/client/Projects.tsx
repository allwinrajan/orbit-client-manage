import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

const ClientProjects = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Projects</h1>
        <p className="text-muted-foreground mt-1">View your project progress and details</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            Project Portfolio
          </CardTitle>
          <CardDescription>Your active and completed projects</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Client projects will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientProjects;