import {
  UNSPLASH_API,
  UNSPLASH_LOGIN_API,
  IMAGES_PER_PAGE,
} from './constants';

export const imagesUrl = (page: number) =>
  `${UNSPLASH_API}/photos?page=${page}&per_page=${IMAGES_PER_PAGE}`;

export const imagesSearchUrl = (page: number, searchInput: string) =>
  `${UNSPLASH_API}/search/photos?page=${page}` +
  `&per_page=${IMAGES_PER_PAGE}&query=${searchInput}`;

export const imageLikeUrl = (imageId: string) => `${UNSPLASH_API}/photos/${imageId}/like`;

export const tokenUrl = `${UNSPLASH_LOGIN_API}/token`;
