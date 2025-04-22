import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import {
  BarChart as BarChartIcon,
  TrendingUp,
  People,
  AttachMoney,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './AnalyticsPage.scss';

const salesData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 2000 },
  { month: 'Apr', value: 2780 },
  { month: 'May', value: 1890 },
  { month: 'Jun', value: 2390 },
];

const userActivityData = [
  { name: 'Mon', users: 2400 },
  { name: 'Tue', users: 1398 },
  { name: 'Wed', users: 9800 },
  { name: 'Thu', users: 3908 },
  { name: 'Fri', users: 4800 },
  { name: 'Sat', users: 3800 },
  { name: 'Sun', users: 4300 },
];

const channelData = [
  { name: 'Social', value: 400 },
  { name: 'Direct', value: 300 },
  { name: 'Email', value: 300 },
  { name: 'Other', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsPage: React.FC = () => {
  return (
    <Box className="analytics-page">
      <Typography variant="h5" className="page-title">
        Analytics Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={6} lg={3}>
          <Card className="summary-card">
            <CardContent>
              <Box className="card-header">
                <Typography variant="subtitle2" color="textSecondary">
                  Total Revenue
                </Typography>
                <IconButton className="icon revenue">
                  <AttachMoney />
                </IconButton>
              </Box>
              <Typography variant="h4">$24,680</Typography>
              <Typography variant="body2" className="trend positive">
                <TrendingUp /> +2.5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card className="summary-card">
            <CardContent>
              <Box className="card-header">
                <Typography variant="subtitle2" color="textSecondary">
                  Active Users
                </Typography>
                <IconButton className="icon users">
                  <People />
                </IconButton>
              </Box>
              <Typography variant="h4">1,482</Typography>
              <Typography variant="body2" className="trend positive">
                <TrendingUp /> +12.5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Monthly Sales</Typography>
              <Box className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Traffic Sources</Typography>
              <Box className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={channelData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <Box className="chart-legend">
                  {channelData.map((entry, index) => (
                    <Box key={entry.name} className="legend-item">
                      <Box
                        className="color-box"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <Typography variant="body2">{entry.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">User Activity</Typography>
              <Box className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsPage; 