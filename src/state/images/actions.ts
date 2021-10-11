import { Dispatch } from 'redux';
import { LOAD_START, LOAD_SUCCESS, SEARCH } from './actionTypes';
import imageData from '../../mock/photoApiMock.json';

export const loadImages = (dispatch: Dispatch): void => {
  dispatch({ type: LOAD_START });

  setTimeout(() => {
    const imagesList = imageData.map((image) => ({
      id: image.id,
      urls: image.urls,
      description: image.description || image.alt_description,
      likedByUser: image.liked_by_user,
      likes: image.likes,
      username: image.user.username,
    }));
    dispatch({ type: LOAD_SUCCESS, payload: imagesList });
  }, 3000);
};

export const searchImages = (searchInput: string) => (dispatch: Dispatch): void => {
  dispatch({ type: SEARCH, payload: searchInput });
};
