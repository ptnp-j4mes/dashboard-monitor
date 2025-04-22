import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
  TextField,
  Toolbar,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';

// Sample data - in a real app, this would come from an API
const deals = [
  {
    id: '01',
    company: 'Acme',
    contact: 'Tyra Dhillon',
    email: 'tyradhillon@acme.com',
    value: 3912,
    source: 'Social Networks',
  },
  {
    id: '02',
    company: 'Academic Project',
    contact: 'Britni Lando',
    email: 'lando@academicproject.com',
    value: 2345,
    source: 'Outreach',
  },
  {
    id: '03',
    company: 'Aimbus',
    contact: 'Kevin Chen',
    email: 'chen@aimbus.com',
    value: 13864,
    source: 'Referrals',
  },
  {
    id: '04',
    company: 'Big Bang Production',
    contact: 'Josh Ryan',
    email: 'joshryan@gmail.com',
    value: 6314,
    source: 'Word-of-mouth',
  },
  {
    id: '05',
    company: 'Book Launch',
    contact: 'Chieko Chute',
    email: 'chieko87@booklaunch.com',
    value: 5982,
    source: 'Outreach',
  },
];

const DealsTable: React.FC = () => {
  return (
    <Box>
      <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All deals
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Search..."
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
            Add New
          </Button>
        </Box>
      </Toolbar>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="deals table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Deals</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals.map((deal) => (
              <TableRow
                key={deal.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{deal.id}</TableCell>
                <TableCell>{deal.company}</TableCell>
                <TableCell>{deal.contact}</TableCell>
                <TableCell>{deal.email}</TableCell>
                <TableCell>${deal.value.toLocaleString()}</TableCell>
                <TableCell>{deal.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DealsTable; 