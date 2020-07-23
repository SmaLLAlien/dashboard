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
