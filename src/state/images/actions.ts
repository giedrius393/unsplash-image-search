import { Dispatch } from 'redux';
import { RootState } from '../store';
import {
  IMAGE_LOADING_START,
  IMAGE_LOADING_SUCCESS,
  IMAGE_LOADING_ERROR,
  SET_SEARCH_INPUT,
  SET_SEARCH_OPTIONS,
  TOGGLE_PHOTO_LIKE,
  TOGGLE_PHOTO_UNLIKE,
  IMAGE_LOADING_NO_PAGES,
} from './actionTypes';
import { getImages, likeImage, unlikeImage } from '../../utils/api';

export const loadImages = async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({ type: IMAGE_LOADING_START });
  const { page, searchInput } = getState().images;

  try {
    const { data } = await getImages(page, searchInput);
    const imageData = data instanceof Array ? data : data.results;
    if (!imageData.length) {
      dispatch({ type: IMAGE_LOADING_NO_PAGES });
    }
    const imagesList = imageData.map((image: any) => ({
      id: image.id,
      urls: image.urls,
      description: image.description,
      likedByUser: image.liked_by_user,
      likes: image.likes,
      username: image.user.username,
    }));
    dispatch({ type: IMAGE_LOADING_SUCCESS, payload: imagesList });
  } catch (err) {
    dispatch({ type: IMAGE_LOADING_ERROR });
  }
};

export const setSearchInput = (searchInput: string | null) =>
  (dispatch: Dispatch<any>, getState: () => RootState): void => {
    dispatch({ type: SET_SEARCH_INPUT, payload: searchInput });
    if (searchInput?.length) {
      localStorage.setItem(
        'search_options',
        JSON.stringify(getState().images.searchOptions),
      );
    }
    dispatch(loadImages);
  };

export const loadSearchOptions = (dispatch: Dispatch) => {
  const searchOptions = localStorage.getItem('search_options');
  if (!searchOptions) return;

  dispatch({ type: SET_SEARCH_OPTIONS, payload: JSON.parse(searchOptions) });
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

