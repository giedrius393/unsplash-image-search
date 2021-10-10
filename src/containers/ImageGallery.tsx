import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import { loadImages } from '../state/images/actions';
import { useAppSelector } from '../state/hooks';

const getColsByWidth = (): number => {
  const width = window.innerWidth;

  if (width < 400) return 1;
  if (width < 600) return 2;
  if (width < 1100) return 3;

  return 5;
};

function ImageGallery(): JSX.Element {
  const dispatch = useDispatch();
  const [imageListCols, setListCols] = useState(3);
  const { imagesList, isLoading } = useAppSelector((state) => state.images);

  const setImageListCols = () => setListCols(getColsByWidth());

  useEffect(() => {
    dispatch(loadImages);
    setImageListCols();
    window.addEventListener('resize', setImageListCols);

    return () => window.removeEventListener('resize', setImageListCols);
  }, []);

  if (isLoading || !imagesList) return <p>Loading</p>;

  return (
    <>
      <ImageList cols={imageListCols} variant='masonry'>
        {imagesList.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={image.url}
              alt={image.description}
              loading='lazy'
            />
            <ImageListItemBar
              title={image.description}
              subtitle={`@${image.username}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {isLoading && <p>Loading</p>}
    </>
  );
}

export default ImageGallery;
