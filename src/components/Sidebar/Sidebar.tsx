import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import {
  Dashboard,
  FolderOpen,
  BarChart,
  Description,
  Extension,
  Business,
  People,
  HelpCenter,
  Notifications,
  Person,
} from '@mui/icons-material';
import './Sidebar.scss';

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Projects', icon: <FolderOpen />, badge: '3/5', path: '/projects' },
  { text: 'Analytics', icon: <BarChart />, path: '/analytics' },
  { text: 'Reports', icon: <Description />, badge: 'New', path: '/reports' },
  { text: 'Extensions', icon: <Extension />, path: '/extensions' },
  { text: 'Companies', icon: <Business />, badge: '17', path: '/companies' },
  { text: 'People', icon: <People />, badge: '164', path: '/people' },
];

const bottomMenuItems = [
  { text: 'Help center', icon: <HelpCenter />, path: '/help' },
  { text: 'Notifications', icon: <Notifications />, badge: '3', path: '/notifications' },
  { text: 'Ember Crest', icon: <Person />, path: '/profile' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      classes={{
        paper: 'sidebar-paper',
      }}
    >
      <Box className="sidebar-header">
        <Typography variant="h6" className="logo" onClick={() => navigate('/')}>
          Prody
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.badge && (
              <Typography variant="caption" className="badge">
                {item.badge}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>

      <List className="bottom-menu">
        {bottomMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.badge && (
              <Typography variant="caption" className="badge">
                {item.badge}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 