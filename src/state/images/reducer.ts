import { AnyAction } from 'redux';
import {
  IMAGE_LOADING_START,
  IMAGE_LOADING_SUCCESS,
  IMAGE_LOADING_ERROR,
  SET_SEARCH_INPUT,
  TOGGLE_PHOTO_LIKE,
  TOGGLE_PHOTO_UNLIKE,
  SET_SEARCH_OPTIONS,
} from './actionTypes';

export interface Image {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  description: string;
  likedByUser: boolean;
  likes: number;
  username: string;
}

interface ImagesState {
  page: number,
  imagesList: Image[],
  isLoading: boolean,
  searchInput: string | null,
  searchOptions: string[],
  hasLoadingError: boolean,
}

const initialState: ImagesState = {
  page: 0,
  imagesList: [],
  isLoading: false,
  searchInput: null,
  searchOptions: [],
  hasLoadingError: false,
};

const imagesReducer = (
  state = initialState,
  action: AnyAction,
): ImagesState => {
  switch (action.type) {
    case IMAGE_LOADING_START: {
      return {
        ...state,
        isLoading: true,
        hasLoadingError: false,
      };
    }
    case IMAGE_LOADING_SUCCESS: {
      return {
        ...state,
        page: state.page + 1,
        isLoading: false,
        imagesList: [...state.imagesList, ...action.payload],
      };
    }
    case IMAGE_LOADING_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasLoadingError: true,
      };
    }
    case SET_SEARCH_INPUT: {
      return {
        ...state,
        imagesList: [],
        page: 0,
        searchInput: action.payload,
        isLoading: true,
        searchOptions: action.payload?.length ? [
          action.payload,
          ...state.searchOptions.filter(
            (option) => option.toLowerCase() !== action.payload.toLowerCase(),
          ),
        ].slice(0, 5) : state.searchOptions,
      };
    }
    case TOGGLE_PHOTO_LIKE: {
      return {
        ...state,
        imagesList: state.imagesList.map((image) => ({
          ...image,
          likedByUser: image.id === action.payload ? true : image.likedByUser,
        })),
      };
    }
    case TOGGLE_PHOTO_UNLIKE: {
      return {
        ...state,
        imagesList: state.imagesList.map((image) => ({
          ...image,
          likedByUser: image.id === action.payload ? false : image.likedByUser,
        })),
      };
    }
    case SET_SEARCH_OPTIONS: {
      return {
        ...state,
        searchOptions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
