import { useState, useEffect } from 'react';
import { TodoObj } from '../model';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import UpdateTodo from './UpdateTodo';
import Toastify, { notify } from '../Toastify';
import { isBrowser } from '../model';

interface Props {
  todo: TodoObj;
  isFinished: any;
  tab: boolean;
  setUpdatedData: any;
  setDeletedData: any;
}

const SingleTodo = ({
  todo,
  isFinished,
  tab,
  setUpdatedData,
  setDeletedData,
}: Props) => {
  const [editable, setEditable] = useState<boolean>(false);

  const date = new Date(todo.date);
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  useEffect(() => {
    setEditable(false);
  }, [tab]);

  const getUpdatedData = (value: any) => {
    setUpdatedData(value);
  };

  const updatedValue = (value: any) => {
    setEditable(value);
  };

  const deleteData = (id: number) => {
    setDeletedData(id);
  };

  return (
    <div className='border-y-2 border-background my-3 py-4'>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-lg'>{todo.title}</div>
        <div>
          {todo.finished == false
            ? editable == false && (
                <div
                  className={`h-3 w-3 rounded-full ${
                    todo.priority == 'Easy' && 'bg-orange-300'
                  } ${todo.priority == 'Normal' && 'bg-cyan-600'} ${
                    todo.priority == 'Important' && 'bg-red-700'
                  }`}
                ></div>
              )
            : ''}
        </div>

        <div>
          {todo.finished == false
            ? isBrowser() && window.innerWidth > 640
              ? `Starts at: ${month}.${day}.${year}`
              : `${month}.${day}.${year}`
            : 'Finshed'}
        </div>
        <div>
          {todo.finished == false ? (
            editable == false && (
              <div>
                <DeleteIcon
                  onClick={() => deleteData(todo.id)}
                  className='cursor-pointer hover:fill-red-700'
                />
                <EditIcon
                  className='mx-8 cursor-pointer hover:fill-gray-500 sm:mx-3'
                  onClick={() => setEditable(true)}
                />
                <CheckIcon
                  className='cursor-pointer hover:fill-green-700'
                  onClick={() => isFinished(todo.id)}
                />
              </div>
            )
          ) : (
            <CheckIcon className='cursor-pointer fill-green-700' />
          )}

          {editable && (
            <div>
              <CloseIcon
                className='cursor-pointer'
                onClick={() => setEditable(false)}
              />
            </div>
          )}
        </div>
      </div>
      {editable && (
        <div className='mt-5'>
          <UpdateTodo
            isOpen={editable}
            todo={todo}
            updateData={getUpdatedData}
            isUpdated={updatedValue}
          />
        </div>
      )}
      <Toastify />
    </div>
  );
};

export default SingleTodo;
