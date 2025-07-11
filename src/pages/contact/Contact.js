import React, { useState } from 'react'; // controle de estado
import {
  Container,
  Typography,
  TextField,
  Button,     // componentes do material ui para estrutura, formularios, visual e animações
  Box,
  Alert,
  InputAdornment,
  CircularProgress,
  Fade,
} from '@mui/material';
import { useForm } from 'react-hook-form'; // validaçao de formularios
import PersonIcon from '@mui/icons-material/Person'; // icones
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false); // dois estados para controlar o envio do formulario e se a mensagem foi enviada e se esta carregando

  const {
    register, // hook para registrar
    handleSubmit, // lida com o envio
    formState: { errors }, // armazena os erros de validaçao
    reset, // limpa os campos apos o envio
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log('Mensagem enviada:', data); // controla o estado do loading e exibe o alerta de sucesso
      setEnviado(true);
      reset();
      setLoading(false);
      setTimeout(() => setEnviado(false), 4000);
    }, 2000); // funçao q simula o envio do form com 2 segundos de atraso 
  }; 

  return ( // fade traz um efeito  de animaçao na entrada
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
           Fale Conosco
        </Typography>

{ /* Exibe um alerta de sucesso quando a mensagem é enviada com sucesso */}
        <Fade in={enviado}>
          <Box mb={2}> 
            <Alert severity="success">Mensagem enviada com sucesso!</Alert>
          </Box>
        </Fade>

 { /* handlesubmit para validar e processar os dados */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)}  noValidate> 
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
              }, // regex para validar o email
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
              ), // a mensagem é obrigatoria e os erros sao exibidos com animaçao
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
  ); // botao de envio desabilitado enquanto o formulario carrega
};

export default Contact;



//Links das documentações usadas (sem hyperlink):
//React (hooks useState): reactjs.org/docs/hooks-state.html

//react-hook-form: react-hook-form.com/get-started/

//Material UI Container: mui.com/material-ui/react-container/

//Material UI Typography: mui.com/material-ui/react-typography/

//Material UI TextField: mui.com/material-ui/react-text-field/

//Material UI Button: mui.com/material-ui/react-button/

//Material UI Box: mui.com/material-ui/react-box/

//Material UI Alert: mui.com/material-ui/react-alert/

//Material UI InputAdornment: mui.com/material-ui/react-input-adornment/

//Material UI CircularProgress: mui.com/material-ui/react-circular-progress/

//Material UI Transitions (Fade): mui.com/material-ui/react-transitions/

//Material UI Icons: mui.com/material-ui/material-icons/