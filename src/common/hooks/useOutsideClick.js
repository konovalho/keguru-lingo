/* eslint-disable */

import { useEffect, useRef, useCallback } from 'react';
import useEventListener from './useEventListener';

export default function useOutsideClick(handler, condition, notNeedClick) {
  const ref = useRef();
  const savedHandler = useRef();

  const outsideClick = event => {
    if (condition && !ref.current.contains(event.target)) {
      savedHandler.current(event);
    }
  };

  useEventListener('scroll', outsideClick);
  if (!notNeedClick) {
    useEventListener('mousedown', outsideClick);
  }

  useEffect(() => {
    savedHandler.current = handler;
  }, []);

  return { ref };
}
