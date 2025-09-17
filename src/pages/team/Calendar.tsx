import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

const TeamCalendar = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Team Calendar</h1>
        <p className="text-muted-foreground mt-1">Schedule meetings and track deadlines</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Calendar View
          </CardTitle>
          <CardDescription>Team schedule and meetings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Team calendar will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCalendar;