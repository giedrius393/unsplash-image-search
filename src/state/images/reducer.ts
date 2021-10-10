import { AnyAction } from 'redux';
import { LOAD_START, LOAD_SUCCESS, SEARCH } from './actionTypes';

export interface Image {
  id: string;
  url: string;
  description: string;
  likedByUser: string;
  likes: number;
  username: string;
}

interface ImagesState {
  imagesList: Image[],
  isLoading: boolean,
  searchInput: string | null,
  searchOptions: string[],
}

const initialState: ImagesState = {
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
        searchInput: action.payload,
        searchOptions: [
          action.payload,
          ...state.searchOptions.filter(
            (option) => option !== action.payload,
          ),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
