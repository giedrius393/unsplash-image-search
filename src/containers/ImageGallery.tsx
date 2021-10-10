import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImageList } from '@mui/material';

import { ImageElement, Loader } from '../components';
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

  if (isLoading && !imagesList.length) return <Loader fullscreen />;

  return (
    <>
      <ImageList cols={imageListCols} variant='masonry'>
        {imagesList.map((image) => (
          <ImageElement image={image} />
        ))}
      </ImageList>
      {isLoading && <Loader />}
    </>
  );
}

export default ImageGallery;
