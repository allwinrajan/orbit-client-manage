import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  Star
} from "lucide-react";

const AdminTeams = () => {
  const teams = [
    {
      id: 1,
      name: "Frontend Development Team",
      lead: { name: "John Doe", email: "john@company.com", avatar: "" },
      members: [
        { name: "Jane Smith", role: "Senior Developer", email: "jane@company.com" },
        { name: "Mike Johnson", role: "UI/UX Designer", email: "mike@company.com" },
        { name: "Sarah Wilson", role: "Junior Developer", email: "sarah@company.com" }
      ],
      projects: 5,
      status: "Active",
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      name: "Backend Development Team",
      lead: { name: "David Lee", email: "david@company.com", avatar: "" },
      members: [
        { name: "Emily Chen", role: "Senior Backend Developer", email: "emily@company.com" },
        { name: "Robert Brown", role: "DevOps Engineer", email: "robert@company.com" }
      ],
      projects: 3,
      status: "Active",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
      id: 3,
      name: "Mobile Development Team",
      lead: { name: "Lisa Davis", email: "lisa@company.com", avatar: "" },
      members: [
        { name: "Tom Wilson", role: "iOS Developer", email: "tom@company.com" },
        { name: "Anna Garcia", role: "Android Developer", email: "anna@company.com" }
      ],
      projects: 2,
      status: "Planning",
      skills: ["React Native", "Swift", "Kotlin"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
          <p className="text-muted-foreground mt-1">Organize and manage your development teams</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Team Analytics</Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Team
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{team.name}</CardTitle>
                  <CardDescription className="mt-2">
                    Led by {team.lead.name} • {team.members.length + 1} members • {team.projects} active projects
                  </CardDescription>
                </div>
                <Badge variant={team.status === 'Active' ? 'default' : 'secondary'}>
                  {team.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Lead */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Team Lead</h4>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={team.lead.avatar} />
                    <AvatarFallback>{team.lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{team.lead.name}</p>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{team.lead.email}</p>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Team Members</h4>
                <div className="space-y-2">
                  {team.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Assign Project
                </Button>
                <Button size="sm" className="flex-1">
                  Manage Team
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminTeams;