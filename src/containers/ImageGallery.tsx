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
  const { imagesList, isLoading, searchInput } = useAppSelector((state) => state.images);

  const [imageListCols, setListCols] = useState(3);
  const [itemRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: true,
    onLoadMore: () => dispatch(loadImages),
  });

  useEffect(() => {
    setImageListCols();
    window.addEventListener('resize', setImageListCols);

    return () => window.removeEventListener('resize', setImageListCols);
  }, []);

  useEffect(() => {
    dispatch(loadImages);
  }, [searchInput]);

  if (isLoading && !imagesList.length) return <Loader fullscreen />;

  return (
    <>
      {searchInput && <h2>Search results of {searchInput}:</h2>}
      <ImageList cols={imageListCols} gap={7} >
        {imagesList.map((image) => (
          <ImageElement key={`${image.id}-element`} image={image} itemRef={itemRef}/>
        ))}
      </ImageList>
      {isLoading && <Loader />}
    </>
  );
}

export default ImageGallery;
