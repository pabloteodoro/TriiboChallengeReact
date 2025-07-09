import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';

const Contact = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [erro, setErro] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, mensagem } = form;

    if (!nome || !email || !mensagem) {
      setErro(true);
      return;
    }

    setErro(false);
    setEnviado(true);
    console.log('Mensagem enviada:', form);
    // Aqui você pode futuramente enviar para um backend
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        📬 Fale Conosco
      </Typography>

      <Box component="form" onSubmit={handleSubmit} maxWidth="sm" mx="auto">
        {erro && <Alert severity="error">Preencha todos os campos!</Alert>}
        {enviado && <Alert severity="success">Mensagem enviada com sucesso!</Alert>}

        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mensagem"
          name="mensagem"
          multiline
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
