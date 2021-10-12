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
  isLoggedIn: boolean,
  onImageLikeClick: (id: string) => void
  onImageUnlikeClick: (id: string) => void
}

function ImageElement(props: ImageProps): JSX.Element {
  const {
    image,
    itemRef,
    isLoggedIn,
    onImageLikeClick,
    onImageUnlikeClick,
  } = props;

  const onLikeClick = () => {
    if (!image.likedByUser) {
      return onImageLikeClick(image.id);
    }
    onImageUnlikeClick(image.id);
  };

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
          isLoggedIn && (
            <IconButton
              sx={styles.iconButton}
              onClick={onLikeClick}
            >
              {image.likedByUser ? <Favorite/> : <FavoriteBorder/> }
            </IconButton>
          )
        }
      />
    </ImageListItem>
  );
}

export default ImageElement;
