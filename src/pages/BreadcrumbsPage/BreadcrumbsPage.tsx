import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  TextField,
  IconButton,
  Button,
  Chip,
  Divider,
  Grid,
} from '@mui/material';
import { TreeView, TreeItem } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';

interface NavigationNode {
  id: string;
  label: string;
  path: string;
  type?: 'company';
  children?: NavigationNode[];
}

// Sample data - in a real app, this would come from an API
const breadcrumbsData: NavigationNode[] = [
  {
    id: 'projects',
    label: 'Projects',
    path: '/projects',
    children: [
      {
        id: 'construction',
        label: 'Construction',
        path: '/projects/construction',
        children: [
          {
            id: 'house-spectrum',
            label: 'House Spectrum Ltd',
            path: '/projects/construction/house-spectrum',
            type: 'company',
          },
          {
            id: 'modern-builders',
            label: 'Modern Builders Co',
            path: '/projects/construction/modern-builders',
            type: 'company',
          },
        ],
      },
      {
        id: 'design',
        label: 'Design',
        path: '/projects/design',
        children: [
          {
            id: 'urban-development',
            label: 'Urban Development Group',
            path: '/projects/design/urban-development',
            type: 'company',
          },
        ],
      },
    ],
  },
];

const recentPaths = [
  {
    id: 1,
    path: ['Projects', 'Construction', 'House Spectrum Ltd', 'Reports'],
    timestamp: '2024-03-15 14:30',
    user: 'Jessica Parker',
  },
  {
    id: 2,
    path: ['Projects', 'Design', 'Urban Development Group'],
    timestamp: '2024-03-15 13:45',
    user: 'Michael Chen',
  },
  {
    id: 3,
    path: ['Projects', 'Construction', 'Modern Builders Co', 'Analytics'],
    timestamp: '2024-03-15 11:20',
    user: 'Sarah Williams',
  },
  {
    id: 4,
    path: ['Companies', 'Eco Structures Ltd'],
    timestamp: '2024-03-15 10:15',
    user: 'David Miller',
  },
];

const renderTree = (nodes: NavigationNode) => (
  <TreeItem
    key={nodes.id}
    nodeId={nodes.id}
    label={
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.5 }}>
        {nodes.type === 'company' ? (
          <BusinessIcon color="action" fontSize="small" />
        ) : (
          <FolderIcon color="action" fontSize="small" />
        )}
        <Typography variant="body2">{nodes.label}</Typography>
      </Box>
    }
  >
    {Array.isArray(nodes.children)
      ? nodes.children.map((node: NavigationNode) => renderTree(node))
      : null}
  </TreeItem>
);

const BreadcrumbsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Navigation Structure */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Navigation Structure</Typography>
              <Button
                size="small"
                startIcon={<AddIcon />}
                variant="outlined"
              >
                Add Path
              </Button>
            </Box>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ flexGrow: 1 }}
            >
              {breadcrumbsData.map((node) => renderTree(node))}
            </TreeView>
          </Paper>
        </Grid>

        {/* Recent Navigation Paths */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                component="div"
              >
                Recent Navigation Paths
              </Typography>
              <TextField
                size="small"
                placeholder="Search paths..."
                sx={{ width: 200, mr: 2 }}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />,
                }}
              />
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="recent paths table">
                <TableHead>
                  <TableRow>
                    <TableCell>Path</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Timestamp</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentPaths.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {item.path.map((step, index) => (
                            <React.Fragment key={index}>
                              {index > 0 && (
                                <ChevronRightIcon
                                  fontSize="small"
                                  sx={{ color: 'text.secondary' }}
                                />
                              )}
                              <Typography
                                variant="body2"
                                color={
                                  index === item.path.length - 1
                                    ? 'primary'
                                    : 'text.primary'
                                }
                              >
                                {step}
                              </Typography>
                            </React.Fragment>
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell>{item.user}</TableCell>
                      <TableCell>{item.timestamp}</TableCell>
                      <TableCell align="right">
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BreadcrumbsPage; 