import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@material-ui/core';

// ----------------------------------------------------------------------

DropDown.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  current: PropTypes.number
};

export default function DropDown({ options, current = 0, onChange }) {
  const onClick = (opt, index) => {
    onChange(opt, index);
  };

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
