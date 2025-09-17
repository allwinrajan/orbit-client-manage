import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            Account Settings
          </CardTitle>
          <CardDescription>Update your profile and system preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Settings panel will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;