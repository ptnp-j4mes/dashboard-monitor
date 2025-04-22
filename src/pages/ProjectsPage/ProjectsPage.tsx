import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import './ProjectsPage.scss';

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'On Hold';
  team: { name: string; avatar?: string }[];
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Redesigning the company website with modern UI/UX',
    progress: 75,
    status: 'In Progress',
    team: [
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Mike Johnson' },
    ],
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Creating a new mobile app for customer engagement',
    progress: 45,
    status: 'In Progress',
    team: [
      { name: 'Sarah Wilson' },
      { name: 'Tom Brown' },
    ],
  },
  {
    id: '3',
    name: 'CRM Integration',
    description: 'Integrating new CRM system with existing tools',
    progress: 100,
    status: 'Completed',
    team: [
      { name: 'Alex Lee' },
      { name: 'Emily Davis' },
    ],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <Box className="projects-page">
      <Box className="projects-header">
        <Typography variant="h5">Projects</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="add-project-btn"
        >
          New Project
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockProjects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card className="project-card">
              <CardContent>
                <Box className="card-header">
                  <Typography variant="h6" className="project-name">
                    {project.name}
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                <Typography variant="body2" color="textSecondary" className="description">
                  {project.description}
                </Typography>

                <Box className="progress-section">
                  <Box className="progress-header">
                    <Typography variant="body2" color="textSecondary">
                      Progress
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    className={`progress-bar ${project.status.toLowerCase().replace(' ', '-')}`}
                  />
                </Box>

                <Box className="card-footer">
                  <Chip
                    label={project.status}
                    className={`status-chip ${project.status.toLowerCase().replace(' ', '-')}`}
                    size="small"
                  />
                  <Box className="team-avatars">
                    {project.team.map((member, index) => (
                      <Box
                        key={index}
                        className="avatar"
                        style={{
                          backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                        }}
                      >
                        {member.name.charAt(0)}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage; 