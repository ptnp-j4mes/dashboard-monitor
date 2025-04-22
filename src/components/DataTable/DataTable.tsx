import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  Avatar,
  Typography,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Download as DownloadIcon,
  MoreHoriz as MoreIcon,
} from '@mui/icons-material';
import './DataTable.scss';

interface Deal {
  id: string;
  name: string;
  contact: {
    name: string;
    avatar?: string;
  };
  email: string;
  value: number;
  source: string;
}

interface DataTableProps {
  data: Deal[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((deal) =>
    Object.values(deal).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Box className="data-table">
      <Box className="table-header">
        <Box className="left-section">
          <Typography variant="subtitle1" className="title">
            All deals
          </Typography>
          <IconButton size="small">
            <FilterIcon />
          </IconButton>
          <IconButton size="small">
            <SortIcon />
          </IconButton>
          <TextField
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon className="search-icon" />,
            }}
            className="search-field"
          />
        </Box>
        <Box className="right-section">
          <IconButton size="small">
            <DownloadIcon />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="add-button"
          >
            Add New
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Deals</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Source</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell>{deal.id}</TableCell>
                <TableCell>{deal.name}</TableCell>
                <TableCell>
                  <Box className="contact-cell">
                    <Avatar src={deal.contact.avatar} className="contact-avatar">
                      {deal.contact.name.charAt(0)}
                    </Avatar>
                    <Typography variant="body2">{deal.contact.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{deal.email}</TableCell>
                <TableCell>${deal.value.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={deal.source}
                    className={`source-chip ${deal.source.toLowerCase()}`}
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable; 