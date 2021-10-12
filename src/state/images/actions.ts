import { Dispatch } from 'redux';
import { RootState } from '../store';
import {
  LOAD_START,
  LOAD_SUCCESS,
  SEARCH,
  TOGGLE_PHOTO_LIKE,
  TOGGLE_PHOTO_UNLIKE,
} from './actionTypes';
import { getImages, likeImage, unlikeImage } from '../../utils/api';

export const loadImages = async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({ type: LOAD_START });
  const { page, searchInput } = getState().images;

  try {
    const { data } = await getImages(page, searchInput);
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
  } catch (err) {
    console.log(err);
  }
};

export const searchImages = (searchInput: string) => (dispatch: Dispatch<any>): void => {
  dispatch({ type: SEARCH, payload: searchInput });
  dispatch(loadImages);
};

export const likeImageAction = (imageId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: TOGGLE_PHOTO_LIKE, payload: imageId });
    await likeImage(imageId);
  } catch (err) {
    dispatch({ type: TOGGLE_PHOTO_UNLIKE, payload: imageId });
  }
};


export const unlikeImageAction = (imageId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: TOGGLE_PHOTO_UNLIKE, payload: imageId });
    await unlikeImage(imageId);
  } catch (err) {
    dispatch({ type: TOGGLE_PHOTO_LIKE, payload: imageId });
  }
};

