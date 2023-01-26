const Header = () => {
  return (
    <div className='bg-primary p-2 pl-10 sm:px-2'>
      <div className='flex justify-between w-full items-center'>
        <div className='text-white font-bold'>Logo</div>
        <div className='inline'>
          <form className='inline'>
            <input
              className='p-1.5 placeholder:text-xs outline-0 w-80 md:w-auto'
              placeholder='Search Todos'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
