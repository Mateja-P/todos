import InsertTodo from './Todo_Components/InsertTodo';
import CurrentDate from './Todo_Components/CurrentDate';
import SingleTodo from './Todo_Components/SingleTodo';
import { useEffect, useState } from 'react';
import { TodoObj } from './model';
import Toastify, { notify } from './Toastify';

const Todo = () => {
  const [todoTab, setTodoTab] = useState<boolean>(true);
  const [tab, setTab] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoObj[]>([]);
  const [displayTodos, setDisplay] = useState<any>(
    todos.filter((todo) => {
      return todo.finished == false;
    })
  );

  const getData = (value: any) => {
    setTodos([...todos, value]);
  };

  useEffect(() => {
    switch (tab) {
      case false:
        setDisplay(
          todos.filter((todo) => {
            return todo.finished == false;
          })
        );
        break;
      case true:
        setDisplay(
          todos.filter((todo) => {
            return todo.finished == true;
          })
        );
        break;
    }
  }, [tab, displayTodos]);

  const finishedTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, finished: true } : todo))
    );

    notify('info', 'Todo finished, Nice job!');
  };

  const updateData = (value: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id == value.id
          ? {
              ...todo,
              title: value.title,
              priority: value.priority,
              date: value.date,
            }
          : todo
      )
    );

    notify('info', 'Todo updated successfully');
  };

  const deleteData = (value: any) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== value;
      })
    );

    notify('info', 'Todo deleted successfully');
  };

  return (
    <div className='p-20 w-full flex flex-col md:px-5 sm:py-10'>
      <div>
        <CurrentDate />
      </div>
      <div className='my-8'>
        <div className='text-left my-6'>
          <span
            onClick={() => setTodoTab(!todoTab)}
            className='cursor-pointer text-xs text-lightText'
          >
            {todoTab ? 'Close Tab' : 'Open Tab'}
          </span>
        </div>
        <InsertTodo isOpen={todoTab} sendData={getData} />
      </div>
      <div className='h-full'>
        <div className='relative inline-block mt-7 mb-9'>
          <span
            className={`mr-7 cursor-pointer font-semibold ${
              !tab ? 'text-primary' : ''
            }`}
            onClick={() => setTab(false)}
          >
            Unfinished
          </span>
          <span
            className={`cursor-pointer font-semibold ${
              tab ? 'text-primary' : ''
            }`}
            onClick={() => setTab(true)}
          >
            Finished
          </span>
        </div>
        <div className='overflow-y-scroll h-80 scrollbar-hide sm:h-auto'>
          {displayTodos.length == 0 ? (
            <div className=''>There is no active todo yet</div>
          ) : (
            displayTodos.map((todo: any, index: number) => (
              <SingleTodo
                key={index}
                todo={todo}
                isFinished={finishedTodo}
                tab={tab}
                setUpdatedData={updateData}
                setDeletedData={deleteData}
              />
            ))
          )}
        </div>
      </div>
      <Toastify />
    </div>
  );
};

export default Todo;
