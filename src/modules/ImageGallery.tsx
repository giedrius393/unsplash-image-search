import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImageList, Box } from '@mui/material';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { ImageElement, Loader, Error } from '../components';
import {
  likeImageAction,
  unlikeImageAction,
  loadImages,
} from '../state/images/actions';
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
  const {
    imagesList,
    isLoading,
    searchInput,
    hasLoadingError,
    hasMorePages,
  } = useAppSelector((state) => state.images);
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  const [imageListCols, setListCols] = useState(3);
  const [itemRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMorePages,
    disabled: hasLoadingError,
    onLoadMore: () => dispatch(loadImages),
  });

  useEffect(() => {
    dispatch(loadImages);
    setImageListCols();
    window.addEventListener('resize', setImageListCols);

    return () => window.removeEventListener('resize', setImageListCols);
  }, []);

  if (hasLoadingError && !imagesList.length) return <Error fullscreen />;
  if (isLoading && !imagesList.length) return <Loader fullscreen />;

  return (
    <>
      {searchInput && (
        <Box sx={{ fontFamily: '"Open Sans", sans-serif', pt: 2, fontSize: 25 }}>
          Search results of "{searchInput}":
        </Box>
      )}
      <ImageList cols={imageListCols} gap={7} >
        {imagesList.map((image) => (
          <ImageElement
            key={`${image.id}-element`}
            image={image}
            itemRef={itemRef}
            isLoggedIn={isLoggedIn}
            onImageLikeClick={(id) => dispatch(likeImageAction(id))}
            onImageUnlikeClick={(id) => dispatch(unlikeImageAction(id))}
          />
        ))}
      </ImageList>
      {isLoading && <Loader />}
      {hasLoadingError && <Error />}
    </>
  );
}

export default ImageGallery;
