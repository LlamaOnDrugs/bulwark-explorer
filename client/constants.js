
export const COIN = 'COIN';
export const COINS = 'COINS';
export const ERROR = 'ERROR';
export const TXS = 'TXS';
export const POS = 'POS';
export const WATCH_ADD = 'WATCH_ADD';
export const WATCH_REMOVE = 'WATCH_REMOVE';
export const REWARDS = 'REWARDS';
export const MOVEMENTS = 'MOVEMENTS';

export const API_BASE = location.origin;
export const PAGINATION_PAGE_SIZE = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 }
];

export default {
  COIN,
  COINS,
  ERROR,
  PAGINATION_PAGE_SIZE,
  TXS,
  POS,
  WATCH_ADD,
  WATCH_REMOVE,

  API_BASE,
  REWARDS,
  MOVEMENTS
};
