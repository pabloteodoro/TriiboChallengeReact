import React, { useState } from 'react';
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import chapada from '../../assets/chapada.jpg'
import fernando from '../../assets/fernando-de-noronha.jpg'
import lencois from '../../assets/lencois.jpg'
import rosa from '../../assets/praia-do-rosa.jpg'
import rio from '../../assets/rio-de-janeiro.jpg'
import sp from '../../assets/sao-paulo.jpg' 

const itemData = [
  {img: chapada, title: 'Chapada dos Veadeiros', author: 'Pablo Teodoro'},
  {img: fernando, title: 'Fernando de Noronha', author: 'Pablo Teodoro'},
  {img: lencois, title: 'Lençóis Maranhenses', author: 'Pablo Teodoro'},
  {img: rosa, title: 'Praia do Rosa', author: 'Pablo Teodoro'},
  {img: rio, title: 'Rio de Janeiro', author: 'Pablo Teodoro'},
  {img: sp, title: 'São Paulo', author: 'Pablo Teodoro'}
 
  
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

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  let cols = 1;
  if(isXs) cols = 1;
  else if(isSm) cols = 2;
  else if(isMd) cols = 3;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
         Galeria de Imagens
      </Typography>

  <ImageList
  variant="standard"
  cols={cols}
  gap={16}
  sx={{
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    overflow: 'hidden',
  }}
>
  {itemData.map((item, index) => (
    <ImageListItem
      key={index}
      onClick={() => handleOpen(item.img)}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 4,
        },
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
        }}
      />
      <ImageListItemBar
        title={item.title}
        subtitle={`por: ${item.author}`}
        position="below"
      />
    </ImageListItem>
  ))}
</ImageList>


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
