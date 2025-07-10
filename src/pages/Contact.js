import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  InputAdornment,
  CircularProgress,
  Fade,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log('Mensagem enviada:', data);
      setEnviado(true);
      reset();
      setLoading(false);
      setTimeout(() => setEnviado(false), 4000);
    }, 2000);
  };

  return (
    <Fade in timeout={600}>
      <Container
        maxWidth="sm"
        sx={{
          mt: 6,
          mb: 6,
          px: 3,
          py: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          📬 Fale Conosco
        </Typography>

        <Fade in={enviado}>
          <Box mb={2}>
            <Alert severity="success">Mensagem enviada com sucesso!</Alert>
          </Box>
        </Fade>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Fade in={!!errors.nome}>
            <Box>{errors.nome && <Alert severity="error">{errors.nome.message}</Alert>}</Box>
          </Fade>
          <TextField
            fullWidth
            label="Nome"
            margin="normal"
            {...register('nome', { required: 'Nome é obrigatório' })}
            error={!!errors.nome}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <Fade in={!!errors.email}>
            <Box>{errors.email && <Alert severity="error">{errors.email.message}</Alert>}</Box>
          </Fade>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Email inválido',
              },
            })}
            error={!!errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <Fade in={!!errors.mensagem}>
            <Box>{errors.mensagem && <Alert severity="error">{errors.mensagem.message}</Alert>}</Box>
          </Fade>
          <TextField
            fullWidth
            label="Mensagem"
            multiline
            rows={4}
            margin="normal"
            {...register('mensagem', { required: 'Mensagem é obrigatória' })}
            error={!!errors.mensagem}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
          </Button>
        </Box>
      </Container>
    </Fade>
  );
};

export default Contact;
