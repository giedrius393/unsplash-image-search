import axios from 'axios';

import {
  UNSPLASH_API,
  CLIENT_ID,
  IMAGES_PER_PAGE,
} from './constants';

const getAxiosOptions = () => ({
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
});

const getImagesUrl = (page: number, searchInput: string | null) => {
  let url = `photos?page=${page}&per_page=${IMAGES_PER_PAGE}`;
  if (searchInput?.length) {
    url = `search/${url}&query=${searchInput}`;
  }
  return `${UNSPLASH_API}/${url}`;
};


export const getImages = (page: number, searchInput: string | null): Promise<any> => {
  if (!CLIENT_ID) {
    return Promise.reject(new Error('fail'));
  }

  return axios.get(
    getImagesUrl(page, searchInput),
    getAxiosOptions(),
  );
};

