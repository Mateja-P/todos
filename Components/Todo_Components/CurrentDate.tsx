const CurrentDate = () => {
  const dateNow = new Date();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = weekday[dateNow.getDay()];
  const month = months[dateNow.getMonth()];
  const dayNum = dateNow.getUTCDate();

  return (
    <div>
      <span className='font-bold text-3xl'>Today </span>
      <span className='text-gray-400'>
        {day} {month} {dayNum}
      </span>
    </div>
  );
};

export default CurrentDate;
