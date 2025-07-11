import { Container, Box, Typography, Avatar, Grid, Paper } from '@mui/material';

const testimonialsData = [ // array com os dados dos depoimentos dos clientes, cada objeto tem o nome do cliente, foto e texto do depoimento
  {
    nome: 'Ana Silva',
    texto: 'Viajar com a ViajeMais foi uma experiência incrível! Atendimento excelente e destinos maravilhosos.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    nome: 'Carlos Eduardo',
    texto: 'Recomendo demais! Organização impecável. Já estou planejando a próxima viagem.',
    foto: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    nome: 'Mariana Costa',
    texto: 'Adorei o suporte e a atenção aos detalhes. A viagem superou todas as minhas expectativas!',
    foto: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          O que os nossos Viajantes Dizem
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonialsData.map(({ nome, texto, foto }, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  src={foto}
                  alt={nome}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}
                >
                  "{texto}"
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {nome}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;


//Links das documentações usadas
//Box: https://mui.com/material-ui/react-box/

//Container: https://mui.com/material-ui/react-container/

//Typography: https://mui.com/material-ui/react-typography/

//Grid: https://mui.com/material-ui/react-grid/

//Paper: https://mui.com/material-ui/react-paper/

//Avatar: https://mui.com/material-ui/react-avatar/