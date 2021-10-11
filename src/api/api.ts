import axios from 'axios';

const UNSPLASH_API = 'https://api.unsplash.com';

const clientId = process.env.REACT_APP_CLIENT_ID;
const imagesPerPage = process.env.REACT_APP_IMAGES_PER_PAGE || 30;


const getAxiosOptions = () => ({
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
});


export const getImages = (page: number, searchInput: string | null): Promise<any> => {
  if (!clientId) {
    return Promise.reject(new Error('fail'));
  }

  return axios.get(
    `${UNSPLASH_API}/photos?page=${page}&per_page=${imagesPerPage}`,
    getAxiosOptions(),
  );
};
