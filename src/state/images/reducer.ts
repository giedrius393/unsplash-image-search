import { AnyAction } from 'redux';
import {
  LOAD_START,
  LOAD_SUCCESS,
  SEARCH,
  TOGGLE_PHOTO_LIKE,
  TOGGLE_PHOTO_UNLIKE,
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
}

const initialState: ImagesState = {
  page: 0,
  imagesList: [],
  isLoading: false,
  searchInput: null,
  searchOptions: [],
};

const imagesReducer = (
  state = initialState,
  action: AnyAction,
): ImagesState => {
  switch (action.type) {
    case LOAD_START: {
      return {
        ...state,
        page: state.page + 1,
        isLoading: true,
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        imagesList: [...state.imagesList, ...action.payload],
      };
    }
    case SEARCH: {
      return {
        ...state,
        imagesList: [],
        page: 0,
        searchInput: action.payload,
        isLoading: true,
        searchOptions: [
          action.payload,
          ...state.searchOptions.filter(
            (option) => option !== action.payload,
          ),
        ],
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
    default: {
      return state;
    }
  }
};

export default imagesReducer;
