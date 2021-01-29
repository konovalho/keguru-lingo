import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

const CheckInput = ({ id, handleBlur }) => {
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const onBlur = (evt) => {
    handleBlur({ id, value: evt.target.value });
  };

  return (
    <input
      className={styles.root}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};

CheckInput.propTypes = {
  id: PropTypes.number.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default CheckInput;
