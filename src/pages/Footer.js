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
  const [openError, setOpenError] = React.useState(false); // controle se os alertas de sucesso e erro devem aparecer

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSuccess(false);
    setOpenError(false);
  }; // fecha os alertas ao clicar fora

  const onSubmit = (data) => {
    try {
      console.log('Email cadastrado:', data);
      reset(); // limpa os  campos do  form
      setOpenSuccess(true); // mostra o  alerta de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setOpenError(true); // mostra o alerta de erro
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

          {/* Newsletter Com Validação Regex */}
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

        {/* Alertas temporario */}
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
          open={openError} // mostra o alerta de sucesso ou erro
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


// Links da documentação usados:

// MUI:
//Box: https://mui.com/material-ui/react-box/

//Container: https://mui.com/material-ui/react-container/

//Typography: https://mui.com/material-ui/react-typography/

//Grid: https://mui.com/material-ui/react-grid/

//TextField: https://mui.com/material-ui/react-text-field/

//Button: https://mui.com/material-ui/react-button/

//Link: https://mui.com/material-ui/react-link/

//Divider: https://mui.com/material-ui/react-divider/

//Avatar: https://mui.com/material-ui/react-avatar/

//InputAdornment: https://mui.com/material-ui/api/input-adornment/

//Snackbar: https://mui.com/material-ui/react-snackbar/

//Alert: https://mui.com/material-ui/react-alert/

// React Hook Form:
//useForm, register, handleSubmit, errors, reset:
//https://react-hook-form.com/get-started

//Ícones MUI:
//EmailIcon: https://mui.com/material-ui/material-icons/?query=email

//FacebookIcon: https://mui.com/material-ui/material-icons/?query=facebook

//InstagramIcon: https://mui.com/material-ui/material-icons/?query=instagram

//TwitterIcon: https://mui.com/material-ui/material-icons/?query=twitter

//GitHubIcon: https://mui.com/material-ui/material-icons/?query=github

