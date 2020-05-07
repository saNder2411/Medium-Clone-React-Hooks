import {parse} from 'query-string';

export const LOGIN_PATH = `/login`;
export const LIMIT = 10;

export const range = (start, end) => {
  return [...Array(end).keys()].map((it) => it + start);
};

export const getPagination = (search) => {
  const parseSearch = parse(search);
  const currentPage = parseSearch.page ? +parseSearch.page : 1;
  const offset = currentPage * 10 - LIMIT;

  return {currentPage, offset};
};