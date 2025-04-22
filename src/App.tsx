import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AnalyticsPage from './pages/AnalyticsPage/AnalyticsPage';
import Report from './pages/Report';
import PeoplePage from './pages/PeoplePage';
import ExtensionsPage from './pages/ExtensionsPage';
import CompaniesPage from './pages/CompaniesPage';
import BreadcrumbsPage from './pages/BreadcrumbsPage';
import './App.scss';

// Mock data
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
  {
    id: '04',
    name: 'Big Bang Production',
    contact: { name: 'Josh Ryan' },
    email: 'joshryan@gmail.com',
    value: 6314,
    source: 'Word-of-mouth',
  },
  {
    id: '05',
    name: 'Book Launch',
    contact: { name: 'Chieko Chute' },
    email: 'chieko87@booklaunch.com',
    value: 5982,
    source: 'Outreach',
  },
];

const AppContent: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbs = (pathname: string) => {
    const paths = pathname.split('/').filter(Boolean);
    if (paths.length === 0) return ['Dashboard'];
    
    return paths.map(path => 
      path.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  return (
    <Box className="app">
      <Sidebar />
      <Box className="main-content">
        <Header breadcrumbs={getBreadcrumbs(location.pathname)} />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/extensions" element={<ExtensionsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/breadcrumbs" element={<BreadcrumbsPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
