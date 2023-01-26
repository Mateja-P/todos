const Header = () => {
  return (
    <div className='bg-primary p-2 pl-10 sm:px-2'>
      <div className='flex justify-between w-full items-center'>
        <div className='text-white font-bold'>Logo</div>
        <input
          className='p-1.5 placeholder:text-xs outline-0 w-80 md:w-1/2'
          placeholder='Search Todos'
        />
      </div>
    </div>
  );
};

export default Header;
