// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Container,
  CardActions,
} from '@mui/material';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?tag=travel')
      .then((response) => {
        // Pega apenas os 6 primeiros artigos
        setArticles(response.data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar artigos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
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
