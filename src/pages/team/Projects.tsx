import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen } from "lucide-react";

const TeamProjects = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Team Projects</h1>
        <p className="text-muted-foreground mt-1">Manage your assigned projects and tasks</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            Assigned Projects
          </CardTitle>
          <CardDescription>Projects assigned to your team</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Team projects will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamProjects;