/* eslint-disable @typescript-eslint/naming-convention */

export const SAVED_CREDENTIAL = '$$Jabilla_Saved_Credential$$';
export const EMAIL_PATTERN = /^\w+([\.\--]?\w+)*@\w+(\-]?\w+)*(\.-]?\w+)*(\.\w{2,3})+$/i;
export const NUMBER_ONLY_PATTERN = /^\d+$/;
export const SPANISH_MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const LANGUAGE = '$$language$$';
export const ENVVARIABLE = '$$envVariable$$';

export const apiUrl = {
  /* USER_INFO */
  GET_CATEGORIES: 'category',
  GET_EASY_ORDER: 'order_easy',

  /* USER_INFO */
  LOGIN: 'sign_in',
  FORGOT_PASSWORD: 'password/reset',
  SIGNUP: 'sign_up',
  STATES: 'address/country/61/state',
  CITIES: 'address/state/',
  SECTOR: 'address/city/',
  CLIENT_TYPE: 'client/type',
  GET_ALL_ACCOUNTS: 'user/',
  ADD_ACCOUNT: 'account',
  SESSION_INFO: 'session',

  /* CART */
  ADD_ITEM: 'cart',
  UPDATE_ITEM: 'cart/update',
  GET_CART: 'cart/current_order',
  GET_INVOICE: 'invoice',
  GET_INVOICE_INFO: 'invoice/',
  PLACE_ORDER: 'queue',
  PLACE_EASY_ORDER: 'cart/products',
  POINTS_COUNT: 'points/count',
  POINTS_HISTORY: 'points/history',
  USER_POINTS: 'user/points',

  /* ORDER */
  ORDER: 'order',

  /* GENERAL */
  BANNER: 'banner',
  DEV_AUTH_URL: 'https://Jabiyaerp.flai.com.do/api/auth/',
  DEV_DETAILS_URL: 'https://Jabiyaerp.flai.com.do/api/',
  ENVVARIABLE: '$$envVariable$$'
};

