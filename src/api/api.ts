import axios from 'axios';

const UNSPLASH_API = 'https://api.unsplash.com';
const UNSPLASH_LOGIN_API = 'https://unsplash.com/oauth/authorize';
const REDIRECT_URL = 'http://localhost:3000/';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const IMAGES_PER_PAGE = process.env.REACT_APP_IMAGES_PER_PAGE || 30;


const getAxiosOptions = () => ({
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
});

const getImagesUrl = (page: number, searchInput: string | null) => {
  let url = UNSPLASH_API;
  if (searchInput?.length) url += '/search';
  url += `/photos?page=${page}&per_page=${IMAGES_PER_PAGE}`;
  if (searchInput?.length) url += `&query=${searchInput}`;

  return url;
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

export const getLoginUrl = (): string => (
  UNSPLASH_LOGIN_API +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${REDIRECT_URL}` +
  '&response_type=code' +
  '&scope=public+read_user+write_likes'
);

