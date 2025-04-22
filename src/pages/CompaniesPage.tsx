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
  LinearProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import BusinessIcon from '@mui/icons-material/Business';

// Sample data - in a real app, this would come from an API
const companies = [
  {
    id: 'C001',
    name: 'House Spectrum Ltd',
    industry: 'Construction',
    location: 'New York, USA',
    employees: 150,
    activeProjects: 8,
    revenue: 5200000,
    status: 'Active',
    progress: 78,
  },
  {
    id: 'C002',
    name: 'Modern Builders Co',
    industry: 'Construction',
    location: 'London, UK',
    employees: 85,
    activeProjects: 5,
    revenue: 3100000,
    status: 'Active',
    progress: 65,
  },
  {
    id: 'C003',
    name: 'Design Masters Inc',
    industry: 'Architecture',
    location: 'Toronto, CA',
    employees: 45,
    activeProjects: 4,
    revenue: 2800000,
    status: 'On Hold',
    progress: 42,
  },
  {
    id: 'C004',
    name: 'Urban Development Group',
    industry: 'Real Estate',
    location: 'Singapore',
    employees: 120,
    activeProjects: 6,
    revenue: 4500000,
    status: 'Active',
    progress: 85,
  },
  {
    id: 'C005',
    name: 'Eco Structures Ltd',
    industry: 'Construction',
    location: 'Sydney, AU',
    employees: 75,
    activeProjects: 3,
    revenue: 2900000,
    status: 'Active',
    progress: 71,
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'success';
    case 'on hold':
      return 'warning';
    default:
      return 'default';
  }
};

const CompaniesPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            component="div"
          >
            Companies
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
              size="small"
              placeholder="Search companies..."
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
              Add Company
            </Button>
          </Box>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Industry</TableCell>
                <TableCell>Location</TableCell>
                <TableCell align="right">Employees</TableCell>
                <TableCell align="right">Active Projects</TableCell>
                <TableCell align="right">Revenue</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Progress</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((company) => (
                <TableRow
                  hover
                  key={company.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        <BusinessIcon />
                      </Avatar>
                      <Typography>{company.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{company.industry}</TableCell>
                  <TableCell>{company.location}</TableCell>
                  <TableCell align="right">{company.employees}</TableCell>
                  <TableCell align="right">{company.activeProjects}</TableCell>
                  <TableCell align="right">
                    ${(company.revenue / 1000000).toFixed(1)}M
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={company.status}
                      size="small"
                      color={getStatusColor(company.status) as any}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 100 }}>
                      <LinearProgress
                        variant="determinate"
                        value={company.progress}
                        sx={{ flex: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {company.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default CompaniesPage; 