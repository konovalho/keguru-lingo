import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

const ControlBar = ({ changeShowTranslate, showTranslate, toggleIsCheck }) => (
  <div className={styles.root}>
    <button onClick={changeShowTranslate} type="button">
      {showTranslate ? 'Скрыть' : 'Показать'} перевод
    </button>
    <button onClick={toggleIsCheck} type="button" disabled={showTranslate}>
      Проверить
    </button>
  </div>
);

ControlBar.propTypes = {
  showTranslate: PropTypes.bool.isRequired,
  changeShowTranslate: PropTypes.func.isRequired,
  toggleIsCheck: PropTypes.func.isRequired,
};

export default ControlBar;
