import axios from 'axios';

const UNSPLASH_API = 'https://api.unsplash.com';

const clientId = process.env.REACT_APP_CLIENT_ID;
const imagesPerPage = process.env.REACT_APP_IMAGES_PER_PAGE || 30;


const getAxiosOptions = () => ({
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
});

const getImagesUrl = (page: number, searchInput: string | null) => {
  let url = UNSPLASH_API;
  if (searchInput?.length) url += '/search';
  url += `/photos?page=${page}&per_page=${imagesPerPage}`;
  if (searchInput?.length) url += `&query=${searchInput}`;

  return url;
};


export const getImages = (page: number, searchInput: string | null): Promise<any> => {
  if (!clientId) {
    return Promise.reject(new Error('fail'));
  }

  return axios.get(
    getImagesUrl(page, searchInput),
    getAxiosOptions(),
  );
};

export const login = (): Promise<any> => {
  return axios.get('https://unsplash.com/oauth/authorize', {
    data: {
      client_id: clientId,
      redirect_uri: 'http://localhost:3000',
      response_type: 'code',
      scope: 'public+read_user+write_likes',
    },
  });
};
