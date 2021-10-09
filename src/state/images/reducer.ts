import { AnyAction } from 'redux';
import { LOAD_START, LOAD_SUCCESS } from './actionTypes';

interface Image {
  id: string;
  url: string;
  description: string;
  likedByUser: string;
  likes: number;
}

interface ImagesState {
  imagesList: Image[] | null,
  isLoading: boolean
}

const initialState: ImagesState = {
  imagesList: null,
  isLoading: false,
};

const imagesReducer = (
  state = initialState,
  action: AnyAction,
): ImagesState => {
  switch (action.type) {
    case LOAD_START: {
      return {
        ...state,
        imagesList: null,
        isLoading: true,
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        imagesList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
