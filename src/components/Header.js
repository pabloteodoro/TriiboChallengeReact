import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ViajeMais
        </Typography>
        <Button color="inherit" component={Link} to="/">Início</Button>
        <Button color="inherit" component={Link} to="/blog">Blog</Button>
        <Button color="inherit" component={Link} to="/galeria">Galeria</Button>
        <Button color="inherit" component={Link} to="/contato">Contato</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
