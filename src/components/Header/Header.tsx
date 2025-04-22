import React from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Typography,
} from '@mui/material';
import {
  Share,
  Settings,
  NavigateNext,
  Home,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

interface HeaderProps {
  breadcrumbs?: string[];
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs = ['Dashboard'] }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    const path = '/' + breadcrumbs
      .slice(0, index + 1)
      .map(crumb => crumb.toLowerCase().replace(/ /g, '-'))
      .join('/');
    navigate(path);
  };

  return (
    <Box className="header">
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'text.primary',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          <Home fontSize="small" />
          Home
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <Link
            key={index}
            component="button"
            onClick={() => handleClick(index)}
            sx={{
              color: index === breadcrumbs.length - 1 ? 'primary.main' : 'text.primary',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
              fontWeight: index === breadcrumbs.length - 1 ? 500 : 400,
            }}
          >
            {crumb}
          </Link>
        ))}
      </Breadcrumbs>

      <Box className="actions">
        <Button
          variant="outlined"
          startIcon={<Settings />}
          className="manage-btn"
        >
          Manage
        </Button>
        <Button
          variant="outlined"
          startIcon={<Share />}
          className="share-btn"
        >
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default Header; 