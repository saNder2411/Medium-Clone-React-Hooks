import {parse} from 'query-string';

export const LOGIN_PATH = `/login`;
export const LIMIT = 10;
const Month = [`January`, `February`, `March`, `April`, `May`, `June`,
  `July`, `August`, `September`, `October`, `November`, `December`];

export const range = (start, end) => [...Array(end).keys()].map((it) => it + start);

export const getPagination = (search) => {

  const parseSearch = parse(search);
  const currentPage = parseSearch.page ? +parseSearch.page : 1;
  const offset = currentPage * 10 - LIMIT;

  return {currentPage, offset};
};

export const parseDateToString = (date) => {

  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return `${Month[month]} ${day}, ${year}`;
};
