import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import { useState, useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

interface Props {
  openMenu: boolean;
}

const Sidebar = ({ openMenu }: Props) => {
  const router = useRouter();
  const [insertLabel, setInsert] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');
  const [labels, setLabels] = useState(['Projcets', 'Meetings']);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (insertLabel) {
      inputRef.current?.focus();
    }
  }, [insertLabel]);

  return (
    <div
      className={`h-full bg-background px-10 pb-20 pt-10 w-96 sm:py-6 overflow-y-scroll scrollbar-hide md:w-full md:px-3 ${
        openMenu ? 'block' : 'hidden'
      }`}
    >
      <div>
        <div className='my-6 cursor-pointer'>
          <div className='flex'>
            <ForumIcon
              className={`mr-3 fill-slate-500 ${
                router.pathname === '/chat' ? 'fill-primary' : ''
              }`}
            />
            <p
              className={`${
                router.pathname === '/chat' ? 'text-primary font-semibold' : ''
              }`}
            >
              Chat
            </p>
          </div>
        </div>
        <div className='my-6 cursor-pointer'>
          <div className='flex'>
            <ListIcon
              className={`mr-3 fill-slate-500 ${
                router.pathname === '/todos' ? '!fill-primary' : ''
              }`}
            />
            <p
              className={`${
                router.pathname === '/todos' ? 'text-primary font-semibold' : ''
              }`}
            >
              Todos
            </p>
          </div>
        </div>
      </div>
      <hr className='bg-hr my-2' />
      <div className='my-10'>
        <div className='text-lightText font-semibold text-sm'>Labels</div>
        <div>
          {labels.map((label, index) => (
            <div className='cursort-pointer font-bold my-6' key={index}>
              {label}
            </div>
          ))}
        </div>
        <div>
          {insertLabel ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (label != '') {
                  setLabels([...labels, label]);
                  setInsert(false);
                }
              }}
            >
              <div>
                <input
                  onChange={(e) => setLabel(e.target.value)}
                  type='text'
                  placeholder='Insert Label'
                  className='outline-none mb-3 p-2 mr-2'
                  ref={inputRef}
                />
                <CloseIcon
                  className='cursor-pointer'
                  onClick={() => setInsert(false)}
                />
              </div>
              <button className='bg-primary text-white px-3 py-1 rounded'>
                Insert
              </button>
            </form>
          ) : (
            <div
              className='cursor-pointer'
              onClick={() => {
                setInsert(true);
              }}
            >
              <AddIcon className='fill-slate-500' />
              <span className='text-lightText font-semibold text-sm'>
                Add label
              </span>
            </div>
          )}
        </div>
      </div>
      <hr className='bg-hr my-2' />
    </div>
  );
};

export default Sidebar;
