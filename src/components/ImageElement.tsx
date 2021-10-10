import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import { Image } from '../state/images/reducer';
import { SxProps } from '@mui/system';

const styles: Record<string, SxProps> = {
  iconButton: {
    color: 'white',
    paddingRight: 2,
  },
};

interface ImageProps {
  image: Image
}

function ImageElement({ image }: ImageProps): JSX.Element {
  const [liked, setLiked] = useState(false);

  return (
    <ImageListItem key={image.id}>
      <img
        src={image.url}
        alt={image.description}
        loading='lazy'
      />
      <ImageListItemBar
        title={image.description}
        subtitle={`@${image.username}`}
        actionIcon={
          <IconButton
            sx={styles.iconButton}
            onClick={() => setLiked(!liked)}
          >
            {liked ? <Favorite/> : <FavoriteBorder/> }
          </IconButton>
        }
      />
    </ImageListItem>
  );
}

export default ImageElement;
