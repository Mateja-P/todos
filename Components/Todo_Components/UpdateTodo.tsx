import DatePicker from './DatePicker';
import RadioButtons from './RadioButtons';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { TodoObj } from '../model';
import Toastify, { notify } from '../Toastify';

interface Props {
  isOpen: boolean;
  todo: TodoObj;
  updateData: any;
  isUpdated: any;
}

const UpdateTodo = ({ isOpen, updateData, todo, isUpdated }: Props) => {
  const [obj, setObj] = useState<any>({
    id: todo.id,
    title: todo.title,
    priority: todo.priority,
    date: todo.date,
  });

  const getPriority = (value: any) => {
    setObj({ ...obj, priority: value });
  };

  const getDate = (value: any) => {
    const date = value;
    setObj({
      ...obj,
      date,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (obj.title && obj.date && obj.priority) {
      updateData(obj);
      isUpdated(false);
    } else {
      notify('error', 'All fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex sm:flex-col-reverse'>
        <div>
          <div className='mb-6'>
            <TextField
              onChange={(e) => {
                const value = e.target.value;
                setObj({ ...obj, title: value });
              }}
              value={obj.title}
              variant='outlined'
              autoComplete='off'
              className='sm:w-full'
            />
          </div>
          <div className='mb-6'>
            <RadioButtons onChange={getPriority} initial={obj.priority} />
          </div>
          <button className='bg-primary text-white py-2 px-6 rounded'>
            Update
          </button>
        </div>
        <div>
          <DatePicker onChange={getDate} initial={obj.date} />
        </div>
      </div>
      <Toastify />
    </form>
  );
};

export default UpdateTodo;
