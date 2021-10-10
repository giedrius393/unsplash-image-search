import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import { loadImages } from '../state/images/actions';
import { useAppSelector } from '../state/hooks';

function ImageGallery(): JSX.Element {
  const dispatch = useDispatch();
  const { imagesList, isLoading } = useAppSelector((state) => state.images);
  const [listCols, setListCols] = useState(3);

  const setListColsByWidth = (width: number) => {
    if (width < 400) {
      setListCols(1);
    } else if (width < 600) {
      setListCols(2);
    } else if (width < 1100) {
      setListCols(3);
    } else {
      setListCols(5);
    }
  };
  const handleResize = () => setListColsByWidth(window.innerWidth);

  useEffect(() => {
    dispatch(loadImages);
    setListColsByWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading || !imagesList) return <p>Loading</p>;

  return (
    <>
      <ImageList cols={listCols} variant='masonry'>
        {imagesList.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={image.url}
              alt={image.description}
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
