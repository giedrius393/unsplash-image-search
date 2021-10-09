import { Dispatch } from 'redux';
import { LOAD_START, LOAD_SUCCESS } from './actionTypes';
import imageData from '../../mock/photoApiMock.json';

export const loadImages = (dispatch: Dispatch): void => {
  dispatch({ type: LOAD_START });

  setTimeout(() => {
    const imagesList = imageData.map((image) => ({
      id: image.id,
      url: image.urls.small,
      description: image.alt_description,
      likedByUser: image.liked_by_user,
      likes: image.likes,
    }));
    dispatch({ type: LOAD_SUCCESS, payload: imagesList });
  }, 3000);
};
