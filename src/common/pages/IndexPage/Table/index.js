import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from '@hooks/useOutsideClick';
import CheckInput from './CheckInput';

import styles from './index.styl';

const Table = ({
  list,
  showTranslate,
  addValueForCheck,
  isCheck,
  listChecked,
  deletePost,
}) => {
  const [editId, setEditId] = useState(0);

  const handleOnDoubleClickTranslate = (value) => () => {
    if (showTranslate) {
      setEditId(value);
    }
  };

  const bindInputEdit = useOutsideClick(() => setEditId(0), editId);

  return list.length > 0 ? (
    <ul className={styles.root}>
      {list.map((item) => (
        <li className={styles.itemWord} key={item.id}>
          <div className={styles.word}>{item.word}</div>
          <div
            className={styles.translate}
            onDoubleClick={handleOnDoubleClickTranslate(item.id)}
          >
            {showTranslate ? (
              <div className="content">
                {editId === item.id ? (
                  <input {...bindInputEdit} />
                ) : (
                  item.translate
                )}
              </div>
            ) : (
              <CheckInput id={item.id} handleBlur={addValueForCheck} />
            )}
          </div>
          <div className={styles.checkField}>
          {isCheck && (
              listChecked.find((listItem) => listItem.id === item.id) &&
              item.translate ===
                listChecked.find((listItem) => listItem.id === item.id).value
                ? 'правильно'
                : 'нет'
          )}
          </div>
          <div onClick={() => {
            deletePost(item.id)
          }} className={styles.delete}>Удалить</div>
        </li>
      ))}
    </ul>
  ) : null;
};

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      word: PropTypes.string,
      translate: PropTypes.string,
    }),
  ).isRequired,
  listChecked: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  ).isRequired,
  showTranslate: PropTypes.bool.isRequired,
  addValueForCheck: PropTypes.func.isRequired,
  isCheck: PropTypes.bool.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Table;
