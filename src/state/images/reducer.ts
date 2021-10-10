import { AnyAction } from 'redux';
import { LOAD_START, LOAD_SUCCESS } from './actionTypes';

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
}

const initialState: ImagesState = {
  imagesList: [],
  isLoading: false,
  searchInput: null,
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
    default: {
      return state;
    }
  }
};

export default imagesReducer;
