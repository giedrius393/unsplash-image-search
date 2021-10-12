export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI ||
  'http://localhost:3000/login';
export const UNSPLASH_API = 'https://api.unsplash.com';
export const UNSPLASH_LOGIN_API = 'https://unsplash.com/oauth';
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
export const IMAGES_PER_PAGE = process.env.REACT_APP_IMAGES_PER_PAGE || 30;

export const LOGIN_URL = UNSPLASH_LOGIN_API +
  `/authorize?client_id=${CLIENT_ID}` +
  `&redirect_uri=${REDIRECT_URI}` +
  '&response_type=code' +
  '&scope=public+read_user+write_likes';
