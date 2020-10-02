import {environment} from '../environments/environment';

export interface ITodo {
  id: string;
  header: string;
  description: string;
  links: string[];
}

export const enum URLS_SERVERS {
  todo = 'https://dashboard-70225.firebaseio.com/',
  register = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  login = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  useInfo = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=',
}

export interface IServerResponse {
  [key: string]: ITodo;
}

export const VALIDATE_CONFIG = {
  loginNameLength: 4,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/
};

export enum ERROR_MESSAGES {
  required = 'field is required!',
  minlength = 'should have minimum 4 characters',
  maxlength = 'maximum 255 characters',
  pattern = 'should have min 5 characters, 1 digit, 1 upper, 1 lowercase characters'
}

export  interface IErrorMessages {
  required: string;
  // email: string;
  pattern: string;
  minlength: string;
  maxlength: string;
}

export const API_KEY = environment.key;
export const ADMIN = 'bb';

export enum ROLES {
  admin = 'admin',
  user = 'user'
}

export interface IAuthResponse {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered?: boolean;
}

export enum NAVIGATION {
  dashboard= 'dashboard',
  login = 'login',
  edit = 'edit',
  new = 'new',
}
export const TOKEN_EXPIRATION = 3600 * 1000;
export const TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';
export const LOGIN_TIME = 'time';

export const NOT_ALLOWED_ACTION = 'Sorry, this action only for admin';
