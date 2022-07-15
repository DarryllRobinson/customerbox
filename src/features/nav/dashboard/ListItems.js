import React, { useState } from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  ListItemText,
} from '@mui/material';
import {
  Assignment,
  BarChart,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Layers,
  Person,
  ShoppingCart,
  StarBorder,
} from '@mui/icons-material';

export function MainListItems() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="User" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component="a" href="signin" sx={{ pl: 4 }}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
