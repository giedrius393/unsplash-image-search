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
  image: Image,
  itemRef: any,
}

function ImageElement({ image, itemRef }: ImageProps): JSX.Element {
  const [liked, setLiked] = useState(false);

  return (
    <ImageListItem key={image.id} ref={itemRef}>
      <img
        style={{ minHeight: '300px', backgroundColor: 'gray' }}
        src={image.urls.thumb}
        srcSet={
          `${image.urls.thumb} 200w, ` +
          `${image.urls.small} 400w, ` +
          `${image.urls.regular} 1080w`
        }
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
