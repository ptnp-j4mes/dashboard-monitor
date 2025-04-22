import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import {
  TrendingUp,
  People,
  AttachMoney,
  Timeline,
} from '@mui/icons-material';
import EntityOverview from '../../components/EntityOverview/EntityOverview';
import Chart from '../../components/Chart/Chart';
import DataTable from '../../components/DataTable/DataTable';
import './DashboardPage.scss';

// Mock data (reusing from App.tsx)
const mockChartData = [
  { date: 'May 23', revenues: 12000, expenditures: 8000 },
  { date: 'Jun 23', revenues: 15000, expenditures: 9000 },
  { date: 'Jul 23', revenues: 13000, expenditures: 10000 },
  { date: 'Aug 23', revenues: 16000, expenditures: 8500 },
  { date: 'Sep 23', revenues: 14000, expenditures: 9500 },
  { date: 'Oct 23', revenues: 17000, expenditures: 11000 },
  { date: 'Nov 23', revenues: 19000, expenditures: 10500 },
  { date: 'Dec 23', revenues: 18000, expenditures: 11500 },
  { date: 'Jan 24', revenues: 20000, expenditures: 12000 },
];

const mockDealsData = [
  {
    id: '01',
    name: 'Acme',
    contact: { name: 'Tyra Dhillon' },
    email: 'tyradhillon@acme.com',
    value: 3912,
    source: 'Social Networks',
  },
  {
    id: '02',
    name: 'Academic Project',
    contact: { name: 'Britni Lando' },
    email: 'lando@academicproject.com',
    value: 2345,
    source: 'Outreach',
  },
  {
    id: '03',
    name: 'Aimbus',
    contact: { name: 'Kevin Chen' },
    email: 'chen@aimbus.com',
    value: 13864,
    source: 'Referrals',
  },
];

const DashboardPage: React.FC = () => {
  return (
    <Box className="dashboard-page">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EntityOverview
            name="House Spectrum Ltd"
            logo="/logo.png"
            certified={true}
            contact={{
              name: 'Jessica Parker',
              avatar: '/avatar.png',
            }}
            lastEdited="7 hrs ago"
            metrics={{
              sales: { label: 'Sales', value: 5.3, total: 10, trend: 4.8 },
              profit: { label: 'Profit', value: 2.4, total: 10, trend: 3.4 },
              customer: { label: 'Customer', value: 7.8, total: 10 },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Chart data={mockChartData} />
        </Grid>

        <Grid item xs={12}>
          <DataTable data={mockDealsData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage; 