import { ADD_POST, DELETE_POST } from './types';

export const addPost = (type, name, city, state, email, description, timeStamp) => (
  {
    type: ADD_POST,
    data: {type, name, city, state, email, description, timeStamp}
  }
);

export const deletePost = (key) => (
  {
    type: DELETE_POST,
    key: key
  }
);
