import axios from 'axios';

import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
} from './constants';
import {
  imagesSearchUrl,
  imagesUrl,
  imageLikeUrl,
  tokenUrl,
} from './urls';

const getAuthorizationToken = () => {
  const token = window.localStorage.getItem('token');
  return token?.length ?
    `Bearer ${token}` :
    `Client-ID ${CLIENT_ID}`;
};

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: getAuthorizationToken(),
    };
    return config;
  },
  (error) => Promise.reject(error),
);


export const getImages = (
  page: number,
  searchInput: string | null,
): Promise<any> => {
  if (!CLIENT_ID) {
    return Promise.reject(new Error('No Client ID'));
  }

  if (searchInput?.length) return api.get(imagesSearchUrl(page + 1, searchInput));
  return api.get(imagesUrl(page + 1));
};

export const getLogInToken = (code: string): Promise<any> => {
  return api.post(tokenUrl, {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: 'authorization_code',
  });
};

export const likeImage = (imageId: string) : Promise<any> => {
  return api.post(imageLikeUrl(imageId));
};

export const unlikeImage = (imageId: string) : Promise<any> => {
  return api.delete(imageLikeUrl(imageId));
};

