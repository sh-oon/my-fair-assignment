import { atom } from 'recoil';
import { Todo } from './to-do.types';


export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});