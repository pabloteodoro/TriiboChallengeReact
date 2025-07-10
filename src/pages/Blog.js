import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  CardActions,
  CircularProgress,
  Grow,
  Fade,
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?tag=travel')
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar artigos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
        sx={{ mt: 4, mb: 4 }}
      >
        📰 Blog de Viagens
      </Typography>

      <Fade in timeout={800}>
        <Container
          sx={{
            mb: 6,
            px: { xs: 2, sm: 4, md: 6 },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {loading ? (
            <CircularProgress sx={{ display: 'block', mx: 'auto', my: 6 }} />
          ) : (
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
              {articles.slice(0, 6).map((article) => (
                <Grow key={article.id} in timeout={500}>
                  <Card
                    sx={{
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 8,
                      },
                      minHeight: 220,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.description?.slice(0, 120) || 'Sem descrição'}...
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ px: 2, pb: 2 }}>
                      <Button
                        variant="contained"
                        size="small"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        color="primary"
                      >
                        Leia mais
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              ))}
            </Masonry>
          )}
        </Container>
      </Fade>
    </>
  );
};

export default Blog;
