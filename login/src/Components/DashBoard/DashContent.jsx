import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import './DashContent.css';

const Dashboard = () => {
  const monthlyData = {
    options: {
      chart: {
        id: 'monthly-chart',
        type: 'bar',
        height: 200,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
        },
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May'],
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#4a90e2'],
    },
    series: [{
      name: 'Monthly Overview',
      data: [65, 59, 80, 81, 56],
    }],
  };

  const yearlyData = {
    options: {
      chart: {
        id: 'yearly-chart',
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
        },
      },
      xaxis: {
        categories: ['2020', '2021', '2022', '2023', '2024'],
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      colors: ['#4a90e2'],
    },
    series: [{
      name: 'Yearly Overview',
      data: [120, 150, 170, 140, 160],
    }],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="overview">
        <Card className="card3">
          <CardContent>
            <Typography variant="h5" component="h2" className="card-title">
              Monthly Overview
            </Typography>
            <ReactApexChart options={monthlyData.options} series={monthlyData.series} type="bar" height={350} />
          </CardContent>
        </Card>
        <Card className="card3">
          <CardContent>
            <Typography variant="h5" component="h2" className="card-title">
              Yearly Overview
            </Typography>
            <ReactApexChart options={yearlyData.options} series={yearlyData.series} type="bar" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
