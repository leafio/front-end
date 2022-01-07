import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

DropDown.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
  current: PropTypes.number
};

export default function DropDown({ options, current = 0, onSort }) {
  // const [option, setOption] = useState(options[current]);
  const onClick = (opt, index) => {
    // setOption(opt);
    onSort(opt, index);
  };
  // useEffect(() => {
  //   onSort(option);
  //   console.log('drop', option);
  // }, [option]);
  return (
    <TextField select size="small" value={options[current].value}>
      {options.map((opt, index) => (
        <MenuItem key={index} value={opt.value} onClick={() => onClick(opt, index)}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
