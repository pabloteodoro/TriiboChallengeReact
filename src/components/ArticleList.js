
import React, { useEffect, useState } from 'react'; // react  e hooks para estgado e efeitos
import axios from 'axios'; // requisiçao http conforme pedido
import {
  Grid,
  Card,
  CardContent, // componentes do mui material
  Typography,
  Button,
  CircularProgress,
  Container,
  CardActions,
} from '@mui/material';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // useEffect para buscar os artigos via api quando o componente for montado
    axios
      .get('https://dev.to/api/articles?tag=travel')
      .then((response) => {
        // Pega apenas os 6 primeiros artigos(conforme pedido)
        setArticles(response.data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar artigos:', error);
        setLoading(false);
      }); // em caso de  sucesso guarda os 6 primeiros artigos e desativa  o loading
  }, []); // em caso de erro, mostra o erro no console e desativa o loading 

  

  if (loading) { // enquanto carrega, retorna um container com spinner centralizado
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        📰 Blog de Viagens
      </Typography>
      
      <Grid container spacing={3}> 
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {article.description?.slice(0, 100) || 'Sem resumo disponível'}...
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Publicado em: {article.readable_publish_date}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leia mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleList;


// Links da documentação oficial do Mui para os componentes utilizados:
//Container: https://mui.com/material-ui/react-container/
//Grid: https://mui.com/material-ui/react-grid/

//Card: https://mui.com/material-ui/react-card/

//Typography: https://mui.com/material-ui/react-typography/

//Button: https://mui.com/material-ui/react-button/

//CircularProgress: https://mui.com/material-ui/react-progress/#circular

// para usar o Axios:
//Axios (para requisição HTTP)
//https://axios-http.com/docs/intro

//API pública Dev.to (para buscar artigos de viagem) fornecida pelo proprio teste tecnico
//https://docs.dev.to/api/#tag/articles