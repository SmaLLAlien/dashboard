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

export enum ERROR_MESSAGES {
  required = 'field is required!',
  minlength = 'should have minimum 4 characters',
  pattern = 'should have min 5 characters, 1 digit, 1 upper, 1 lowercase characters'
}

export  interface ErrorMessages {
  required: string;
  // email: string;
  pattern: string;
  minlength: string;
  // maxlength: string;
}
