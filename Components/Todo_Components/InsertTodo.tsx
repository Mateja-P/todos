import DatePicker from './DatePicker';
import RadioButtons from './RadioButtons';
import { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Toastify, { notify } from '../Toastify';

interface Props {
  isOpen: boolean;
  sendData: any;
}

const InsertTodo = ({ isOpen, sendData }: Props) => {
  const [obj, setObj] = useState<any>({});
  const [clear, setClearing] = useState<boolean>(false);

  const titleRef = useRef<any>();

  const getPriority = (value: any) => {
    setObj({ ...obj, priority: value });
  };

  const getDate = (value: any) => {
    if (value != null) {
      const date = new Date(value.$d);

      setObj({
        ...obj,
        finished: false,
        date,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setObj({
      ...obj,
      id: Date.now(),
    });

    console.log(obj);

    if (obj.title && obj.date && obj.priority) {
      await sendData(obj);

      notify('success', 'Todo added successfully');

      setClearing(true);
      setTimeout(() => {
        setClearing(false);
      }, 500);
    } else {
      notify('error', 'All inputs are required');
    }
  };

  useEffect(() => {
    if (clear) {
      titleRef.current.reset();
    }
  }, [clear]);

  return (
    <form
      ref={titleRef}
      onSubmit={handleSubmit}
      className={`${isOpen ? 'block' : 'hidden'}`}
    >
      <div className='flex sm:flex-col-reverse'>
        <div className='md:flex-1'>
          <div className='mb-6'>
            <TextField
              onChange={(e) => {
                const value = e.target.value;
                setObj({ ...obj, title: value });
              }}
              label='Title'
              variant='outlined'
              autoComplete='off'
              className='sm:w-full'
            />
          </div>
          <div className='mb-6'>
            <RadioButtons onChange={getPriority} clear={clear} />
          </div>
          <button className='bg-primary text-white py-2 px-6 rounded'>
            Insert
          </button>
        </div>
        <div className='md:flex-1'>
          <DatePicker onChange={getDate} clear={clear} />
        </div>
      </div>
      <Toastify />
    </form>
  );
};

export default InsertTodo;
