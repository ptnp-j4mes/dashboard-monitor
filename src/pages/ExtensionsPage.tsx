import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Switch,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExtensionIcon from '@mui/icons-material/Extension';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';

// Sample data - in a real app, this would come from an API
const extensions = [
  {
    id: 'ext1',
    name: 'Security Suite',
    description: 'Advanced security features and compliance tools',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Active',
    version: '2.1.0',
    category: 'Security',
  },
  {
    id: 'ext2',
    name: 'Analytics Pro',
    description: 'Enhanced analytics and reporting capabilities',
    icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Active',
    version: '3.0.2',
    category: 'Analytics',
  },
  {
    id: 'ext3',
    name: 'Project Tools',
    description: 'Additional project management features',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Inactive',
    version: '1.5.0',
    category: 'Project Management',
  },
  {
    id: 'ext4',
    name: 'Cloud Storage',
    description: 'Integrated cloud storage solution',
    icon: <CloudIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Active',
    version: '2.3.1',
    category: 'Storage',
  },
];

const ExtensionsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="h1">
          Extensions
        </Typography>
        <TextField
          size="small"
          placeholder="Search extensions..."
          sx={{ width: 250 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {extensions.map((extension) => (
          <Grid item xs={12} md={6} key={extension.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ mr: 2 }}>{extension.icon}</Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" component="h2">
                        {extension.name}
                      </Typography>
                      <Switch
                        checked={extension.status === 'Active'}
                        color="primary"
                      />
                    </Box>
                    <Typography color="text.secondary" sx={{ mb: 1 }}>
                      {extension.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip
                        label={extension.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label={`v${extension.version}`}
                        size="small"
                        color="default"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small">Learn More</Button>
                <Button size="small" color="primary">
                  Settings
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExtensionsPage; 