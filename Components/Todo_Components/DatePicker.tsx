import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

const date = new Date();

const DatePicker = ({ onChange, initial = dayjs(date), clear = null }: any) => {
  const [value, setValue] = useState<Dayjs | null>(
    initial ? initial : dayjs(date)
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  useEffect(() => {
    onChange(value);

    if (clear) {
      setValue(dayjs(date));
    }
  }, [value, clear]);

  return (
    <div className='sm:mb-4'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label='Select starting date:'
            inputFormat='MM/DD/YYYY'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
