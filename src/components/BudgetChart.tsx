import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography } from '@mui/material';

// Sample data - in a real app, this would come from an API
const data = [
  { date: '2 May 23', revenues: 12000, expenditures: 10000 },
  { date: 'Jun 23', revenues: 15000, expenditures: 11000 },
  { date: 'Jul 23', revenues: 13000, expenditures: 12000 },
  { date: 'Aug 23', revenues: 17000, expenditures: 13000 },
  { date: 'Sep 23', revenues: 14000, expenditures: 11500 },
  { date: 'Oct 23', revenues: 16000, expenditures: 12500 },
  { date: 'Nov 23', revenues: 18000, expenditures: 13000 },
  { date: 'Dec 23', revenues: 19000, expenditures: 14000 },
  { date: 'Jan 17 24', revenues: 13546, expenditures: 4254 },
];

const BudgetChart: React.FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#666"
            style={{ fontSize: '0.8rem' }}
          />
          <YAxis
            stroke="#666"
            style={{ fontSize: '0.8rem' }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenues"
            stroke="#0088FE"
            dot={false}
            name="Revenues"
          />
          <Line
            type="monotone"
            dataKey="expenditures"
            stroke="#FF8042"
            dot={false}
            name="Expenditures"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BudgetChart; 