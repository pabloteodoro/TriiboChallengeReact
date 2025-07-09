import React, { useState } from 'react';
import {
  Grid,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const images = [
  'https://source.unsplash.com/800x600/?travel,beach',
  'https://source.unsplash.com/800x600/?mountain',
  'https://source.unsplash.com/800x600/?city',
  'https://source.unsplash.com/800x600/?forest',
  'https://source.unsplash.com/800x600/?desert',
  'https://source.unsplash.com/800x600/?island',
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg('');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        🖼 Galeria de Imagens
      </Typography>
      <Grid container spacing={2}>
        {images.map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <img
              src={{img}}
              alt={`viagem-${i}`}
              style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
              onClick={() => handleOpen(img)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={selectedImg} alt="imagem ampliada" style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Gallery;
