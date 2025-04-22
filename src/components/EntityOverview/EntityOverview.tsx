import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Avatar,
} from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import './EntityOverview.scss';

interface MetricCardProps {
  label: string;
  value: number;
  total: number;
  trend?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, total, trend }) => (
  <Box className="metric-card">
    <Typography variant="caption" className="label">
      {label}
    </Typography>
    <Box className="value-container">
      <Typography variant="h4" className="value">
        {value}
      </Typography>
      <Typography variant="caption" className="total">
        /{total}
      </Typography>
    </Box>
    {trend && (
      <Typography
        variant="caption"
        className={`trend ${trend > 0 ? 'positive' : 'negative'}`}
      >
        {trend > 0 ? '+' : ''}{trend}%
      </Typography>
    )}
  </Box>
);

interface EntityOverviewProps {
  name: string;
  logo: string;
  certified: boolean;
  contact: {
    name: string;
    avatar?: string;
  };
  lastEdited: string;
  metrics: {
    sales: MetricCardProps;
    profit: MetricCardProps;
    customer: MetricCardProps;
  };
}

const EntityOverview: React.FC<EntityOverviewProps> = ({
  name,
  logo,
  certified,
  contact,
  lastEdited,
  metrics,
}) => {
  return (
    <Box className="entity-overview">
      <Box className="entity-header">
        <Box className="logo-container">
          <img src={logo} alt={name} className="logo" />
        </Box>
        <Box className="info">
          <Box className="title-row">
            <Typography variant="h5" className="name">
              {name}
            </Typography>
            {certified && (
              <Chip
                icon={<VerifiedUser />}
                label="Certified"
                className="certified-badge"
                size="small"
              />
            )}
          </Box>
          <Box className="contact-row">
            <Avatar src={contact.avatar} className="contact-avatar">
              {contact.name.charAt(0)}
            </Avatar>
            <Typography variant="body2" className="contact-name">
              {contact.name}
            </Typography>
            <Typography variant="caption" className="last-edited">
              Edited {lastEdited}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="metrics">
        <MetricCard {...metrics.sales} label="Sales" />
        <MetricCard {...metrics.profit} label="Profit" />
        <MetricCard {...metrics.customer} label="Customer" />
      </Box>
    </Box>
  );
};

export default EntityOverview; 