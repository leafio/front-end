import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

DropDown.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default function DropDown({ options, onSort }) {
  const [option, setOption] = useState(options[0]);
  useEffect(() => {
    onSort(option);
    console.log('drop', option);
  }, [option]);
  return (
    <TextField select size="small" value={option.value}>
      {options.map((opt, index) => (
        <MenuItem key={index} value={opt.value} onClick={() => setOption(opt)}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
