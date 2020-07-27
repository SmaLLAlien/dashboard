export interface ITodo {
  header: string;
  description: string;
  link: string;
}

export const enum URLS {
  todo = 'https://dashboard-70225.firebaseio.com/'
}

export interface IServerResponse {
  [key: string]: ITodo;
}

export const VALIDATE_CONFIG = {
  loginNameLength: 4,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/
};
