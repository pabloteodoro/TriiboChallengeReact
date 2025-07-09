import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'; // coloque uma imagem em assets

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Explore o mundo com a ViajeMais
        </Typography>
        <Typography variant="h6" gutterBottom>
          Viajar é colecionar memórias.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/blog"
        >
          Acesse o Blog
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
