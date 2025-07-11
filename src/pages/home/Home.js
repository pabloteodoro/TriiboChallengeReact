import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import bannerImg from '../../assets/banner2.avif'
import Footer from '../Footer';
import Testimonials from '../../components/Testimonials';


const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Banner */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', sm: '60vh' },
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
            zIndex: 1,
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              animation: 'fadeIn 1s ease-in-out',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
            }}
          >
            Explore o mundo com a ViajeMais
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              animation: 'fadeIn 1.5s ease-in-out',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            {isMobile
              ? 'Colecione Memórias.'
              : 'Viajar é colecionar memórias.'}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size={isMobile ? 'medium' : 'large'}
            component={Link}
            to="/blog"
            startIcon={<FlightTakeoffIcon />}
            sx={{
              mt: 3,
              animation: 'fadeIn 2s ease-in-out',
              fontWeight: 'bold',
            }}
          >
            Acesse o Blog
          </Button>
        </Container>

        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </Box>

      <Testimonials/>

      <Footer />
      
    </Box>
  );
};

export default Home;
