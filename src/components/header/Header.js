import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,          // importa componentes MUI para o header, botão, menu e etc.
  Drawer,          // importa o Link e o useLocation do react-router-dom para navegação
  List,       
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [ //  navlinks é o array de objetos com os links dos menus
  { label: 'Início', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Galeria', path: '/galeria' }, 
  { label: 'Contato', path: '/contato' },
];

const Header = () => {
  const [open, setOpen] = useState(false); // estado para abrir/fechar o import drawer no  mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // detecta se a tela é pequena
  const location = useLocation(); // pega a rota atual

  const toggleDrawer = () => setOpen(!open); // abre ou fecha  o drawe

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

          {isMobile ? ( // se for mobile o isMobile for true mostra icone na lateral pra abrir o menu
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


// Links das documentações oficiais usadas

// AppBar: https://mui.com/material-ui/react-app-bar/

//Toolbar: https://mui.com/material-ui/react-app-bar/#app-bar-with-a-primary-search-field

//Typography: https://mui.com/material-ui/react-typography/

//IconButton: https://mui.com/material-ui/react-button/#icon-buttons

//Button: https://mui.com/material-ui/react-button/

//Drawer: https://mui.com/material-ui/react-drawer/

//List / ListItem: https://mui.com/material-ui/react-list/

//useMediaQuery: https://mui.com/material-ui/react-use-media-query/

//useTheme: https://mui.com/material-ui/customization/use-theme-hook/

//MenuIcon: https://mui.com/material-ui/material-icons/#menu