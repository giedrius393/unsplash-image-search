import { Dispatch } from 'redux';
import { RootState } from '../store';
import { LOAD_START, LOAD_SUCCESS, SEARCH } from './actionTypes';
import { getImages } from '../../utils/api';

export const loadImages = (dispatch: Dispatch, getState: () => RootState): void => {
  dispatch({ type: LOAD_START });
  const { page, searchInput } = getState().images;

  getImages(page, searchInput)
    .then(({ data }) => {
      const imageData = data instanceof Array ? data : data.results;
      const imagesList = imageData.map((image: any) => ({
        id: image.id,
        urls: image.urls,
        description: image.description || image.alt_description,
        likedByUser: image.liked_by_user,
        likes: image.likes,
        username: image.user.username,
      }));
      dispatch({ type: LOAD_SUCCESS, payload: imagesList });
    })
    .catch((error) => console.log(error));
};

export const searchImages = (searchInput: string) => (dispatch: Dispatch<any>): void => {
  dispatch({ type: SEARCH, payload: searchInput });
  dispatch(loadImages);
};

// export const likeImage = (imageId: string) =>
//   (dispatch: Dispatch, getState: () => RootState) => {

// }
