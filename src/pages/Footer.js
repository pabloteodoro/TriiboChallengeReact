import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link as MuiLink,
  Divider,
  Avatar,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import fotoPerfil from '../assets/foto-de-perfil.png';
import GithubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSuccess(false);
    setOpenError(false);
  };

  const onSubmit = (data) => {
    try {
      console.log('Email cadastrado:', data);
      reset();
      setOpenSuccess(true);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setOpenError(true);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#555', color: '#fff', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* SOBRE MIM */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <Avatar
                src={fotoPerfil}
                alt="Sobre mim"
                sx={{ width: 80, height: 80 }}
              />
              <Box>
                <Typography variant="h6" gutterBottom>
                  Sobre mim
                </Typography>
                <Typography variant="body2">
                    Olá, Eu sou o Pablo! Desenvolvedor Front-end e sou um apaixonado por viagens e aventuras. Neste blog, compartilho minhas experiências, dicas e inspirações para ajudar você a planejar sua próxima viagem. Vamos explorar o mundo juntos!
                </Typography>
               
              </Box>
            </Box>
          </Grid>

          {/* NEWSLETTER COM VALIDAÇÃO */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Assine a newsletter
            </Typography>
            <Typography variant="body2" mb={2}>
              Receba novidades e dicas exclusivas no seu email.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              gap={2}
              alignItems="center"
            >
              <TextField
                placeholder="Insira seu email aqui"
                type="email"
                size="small"
                {...register('email', {
                  required: 'O email é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Digite um email válido',
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  width: { xs: '100%', sm: '60%' },
                }}
              />

              <Button variant="contained" type="submit" color="primary" sx={{ px: 3, py: 1.3 }}>
                Assinar agora
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#777' }} />

        {/* RODAPÉ INFERIOR */}
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" gap={2}>
          <Box display="flex" gap={2} flexWrap="wrap">
            <MuiLink href="/" color="inherit" underline="hover">Política de Privacidade</MuiLink>
            <MuiLink href="/" color="inherit" underline="hover">Termos e Condições</MuiLink>
            <MuiLink href="/" color="inherit" underline="hover">Política de Cookies</MuiLink>
          </Box>

          <Box display="flex" gap={2}>
            <MuiLink href="/"><FacebookIcon sx={{ color: '#fff' }} /></MuiLink>
            <MuiLink href="https://www.instagram.com/triibo/" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover"><InstagramIcon sx={{ color: '#fff' }} /></MuiLink>
            <MuiLink href="/"><TwitterIcon sx={{ color: '#fff' }} /></MuiLink>
            <MuiLink href="https://github.com/pabloteodoro" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover"><GithubIcon sx={{ color: '#fff' }} /></MuiLink>
          </Box>
        </Box>

        <Typography textAlign="center" mt={4} variant="caption" color="gray">
          © 2025 por ViajeMais. Criado por Pablo Teodoro.
        </Typography>

        {/* ALERTAS */}
        <Snackbar
          open={openSuccess}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Email cadastrado com sucesso!
          </Alert>
        </Snackbar>

        <Snackbar
          open={openError}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Ocorreu um erro ao cadastrar. Tente novamente.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Footer;
