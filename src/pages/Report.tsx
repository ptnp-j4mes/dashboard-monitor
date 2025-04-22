import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import BudgetChart from '../components/BudgetChart';
import DealsTable from '../components/DealsTable';

const Report: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 360,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Consolidated budget
            </Typography>
            <BudgetChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <DealsTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Report; 