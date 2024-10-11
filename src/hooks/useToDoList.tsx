
import { useToast } from '@/provider/toast/toast';
import { Todo, todoListState } from '@/store';
import { validateTextLength } from '@/utils/validator';
import { useRecoilState } from 'recoil';

export const useToDoList = () => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todoListState);

  const { showToast } = useToast();

  const addTodo = (todo: string) => {
    const valid = validateTextLength(todo, 1, 20);

    if (!valid) {
      showToast('최대 20자까지 입력 가능합니다.');
      return;
    }

    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        title: todo,
        completed: false,
      },
    ]);
  };

  const changeTodoStatus = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  const removeTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    clearTodos,
    changeTodoStatus,
  };
};