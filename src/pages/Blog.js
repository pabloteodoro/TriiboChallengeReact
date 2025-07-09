import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  CardActions,
  CircularProgress,
} from '@mui/material';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?tag=travel')
      .then((res) => {
        setArticles(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar artigos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        📰 Blog de Viagens
      </Typography>

      {loading ? (
        <Grid container justifyContent="center"><CircularProgress /></Grid>
      ) : (
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {article.description?.slice(0, 100) || 'Sem descrição'}...
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.readable_publish_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
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
      )}
    </Container>
  );
};

export default Blog;
