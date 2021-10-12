const REDIRECT_URL = 'http://localhost:3000/';
const UNSPLASH_LOGIN_API = 'https://unsplash.com/oauth/authorize';

export const UNSPLASH_API = 'https://api.unsplash.com';
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const IMAGES_PER_PAGE = process.env.REACT_APP_IMAGES_PER_PAGE || 30;

export const LOGIN_URL = UNSPLASH_LOGIN_API +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${REDIRECT_URL}` +
  '&response_type=code' +
  '&scope=public+read_user+write_likes';
