import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Contato', path: '/contato' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#0288d1' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
          >
            ViajeMais
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box>
              {navLinks.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                    mx: 1,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer para mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                key={item.path}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
