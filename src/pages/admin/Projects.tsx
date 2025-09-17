import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Calendar, 
  Users, 
  DollarSign,
  Clock,
  Target,
  GitBranch
} from "lucide-react";

const AdminProjects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      client: "TechCorp Inc.",
      description: "Full-stack e-commerce solution with advanced analytics",
      status: "In Progress",
      progress: 75,
      startDate: "Aug 15, 2024",
      deadline: "Dec 15, 2024",
      budget: "$45,000",
      spent: "$33,750",
      team: ["John Doe", "Jane Smith", "Mike Johnson"],
      milestones: 8,
      completedMilestones: 6,
      priority: "High"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      client: "FinanceHub",
      description: "Secure mobile banking application with biometric authentication",
      status: "Planning",
      progress: 25,
      startDate: "Oct 1, 2024",
      deadline: "Jan 20, 2025",
      budget: "$65,000",
      spent: "$8,500",
      team: ["Sarah Wilson", "David Lee"],
      milestones: 12,
      completedMilestones: 3,
      priority: "Medium"
    },
    {
      id: 3,
      name: "Healthcare Portal",
      client: "MedTech Solutions",
      description: "Patient management system with telemedicine features",
      status: "Testing",
      progress: 90,
      startDate: "Jun 10, 2024",
      deadline: "Nov 30, 2024",
      budget: "$28,000",
      spent: "$25,200",
      team: ["Emily Chen", "Robert Brown", "Lisa Davis"],
      milestones: 6,
      completedMilestones: 5,
      priority: "High"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'default';
      case 'Planning':
        return 'secondary';
      case 'Testing':
        return 'outline';
      case 'Completed':
        return 'default';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Project Management</h1>
          <p className="text-muted-foreground mt-1">Oversee all project templates and progress</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Template Library</Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <Card key={project.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant={getPriorityColor(project.priority)}>
                      {project.priority} Priority
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{project.client}</CardDescription>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <Button variant="outline">View Details</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Progress</span>
                  </div>
                  <Progress value={project.progress} className="w-full" />
                  <p className="text-xs text-muted-foreground">{project.progress}% Complete</p>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Timeline</span>
                  </div>
                  <p className="text-sm text-foreground">{project.startDate}</p>
                  <p className="text-xs text-muted-foreground">Due: {project.deadline}</p>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Budget</span>
                  </div>
                  <p className="text-sm text-foreground">{project.spent} / {project.budget}</p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((parseFloat(project.spent.replace('$', '').replace(',', '')) / parseFloat(project.budget.replace('$', '').replace(',', ''))) * 100)}% used
                  </p>
                </div>

                {/* Team */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Team</span>
                  </div>
                  <p className="text-sm text-foreground">{project.team.length} members</p>
                  <p className="text-xs text-muted-foreground">{project.team.join(', ')}</p>
                </div>
              </div>

              {/* Milestones */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Milestones</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.completedMilestones} of {project.milestones} completed
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Milestones</Button>
                  <Button size="sm" variant="outline">Assign Team</Button>
                  <Button size="sm">Update Progress</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;