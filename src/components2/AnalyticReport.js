import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Container, Typography, Grid, Paper } from '@mui/material';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticReport = () => {
  // Example data for the charts
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#42a5f5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Expenses',
        data: [2000, 3000, 4000, 5000],
        backgroundColor: '#ef5350',
        borderColor: '#c62828',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Marketing', 'Sales', 'Development', 'Administration'],
    datasets: [
      {
        data: [30, 25, 35, 10],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        borderColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Analytic Report
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Line Chart
            </Typography>
            <div style={{ width: '100%', height: '300px' }}>
              <Line data={lineData} options={{ responsive: true }} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Withdrawal Bar Chart
            </Typography>
            <div style={{ width: '100%', height: '300px' }}>
              <Bar data={barData} options={{ responsive: true }} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Budget Allocation Pie Chart
            </Typography>
            <div style={{ width: '100%', height: '300px' }}>
              <Pie data={pieData} options={{ responsive: true }} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticReport;
