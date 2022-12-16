import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from 'react';

const RadioButtons = ({ onChange, initial = null, clear = null }: any) => {
  const [value, setValue] = useState<string | null>(initial);

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    onChange(value);

    if (clear) {
      setValue(null);
    }
  }, [value, clear]);

  return (
    <div>
      <FormControl>
        <FormLabel>Select priority:</FormLabel>
        <RadioGroup value={value} row onChange={handleChangeEvent}>
          <FormControlLabel value='Easy' control={<Radio />} label='Easy' />
          <FormControlLabel value='Normal' control={<Radio />} label='Normal' />
          <FormControlLabel
            value='Important'
            control={<Radio />}
            label='Important'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtons;
