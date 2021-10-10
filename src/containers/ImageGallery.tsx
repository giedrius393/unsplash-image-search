import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImageList } from '@mui/material';
import useInfiniteScroll from 'react-infinite-scroll-hook';

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
  const setImageListCols = () => setListCols(getColsByWidth());

  const dispatch = useDispatch();
  const [imageListCols, setListCols] = useState(3);
  const { imagesList, isLoading } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(loadImages);
    setImageListCols();
    window.addEventListener('resize', setImageListCols);

    return () => window.removeEventListener('resize', setImageListCols);
  }, []);

  const [itemRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: true,
    onLoadMore: () => dispatch(loadImages),
  });

  if (isLoading && !imagesList.length) return <Loader fullscreen />;

  return (
    <>
      <ImageList cols={imageListCols} >
        {imagesList.map((image) => (
          <ImageElement image={image} itemRef={itemRef}/>
        ))}
      </ImageList>
      {isLoading && <Loader />}
    </>
  );
}

export default ImageGallery;
