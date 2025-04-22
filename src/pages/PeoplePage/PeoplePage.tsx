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
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';

// Sample data - in a real app, this would come from an API
const people = [
  {
    id: 'P001',
    name: 'Jessica Parker',
    role: 'Project Manager',
    email: 'jessica.parker@company.com',
    department: 'Construction',
    status: 'Active',
    projects: 5,
  },
  {
    id: 'P002',
    name: 'Michael Chen',
    role: 'Senior Architect',
    email: 'michael.chen@company.com',
    department: 'Design',
    status: 'Active',
    projects: 3,
  },
  {
    id: 'P003',
    name: 'Sarah Williams',
    role: 'Construction Lead',
    email: 'sarah.w@company.com',
    department: 'Construction',
    status: 'On Leave',
    projects: 2,
  },
  {
    id: 'P004',
    name: 'David Miller',
    role: 'Site Supervisor',
    email: 'david.m@company.com',
    department: 'Operations',
    status: 'Active',
    projects: 4,
  },
  {
    id: 'P005',
    name: 'Emma Thompson',
    role: 'Interior Designer',
    email: 'emma.t@company.com',
    department: 'Design',
    status: 'Active',
    projects: 6,
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'success';
    case 'on leave':
      return 'warning';
    default:
      return 'default';
  }
};

const PeoplePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            component="div"
          >
            People
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
              size="small"
              placeholder="Search people..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />,
              }}
            />
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <IconButton>
              <SortIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Add Person
            </Button>
          </Box>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Active Projects</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((person) => (
                <TableRow
                  hover
                  key={person.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography>{person.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{person.role}</TableCell>
                  <TableCell>{person.department}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={person.status}
                      size="small"
                      color={getStatusColor(person.status) as any}
                    />
                  </TableCell>
                  <TableCell align="right">{person.projects}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default PeoplePage; 