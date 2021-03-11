import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';
import { media, hoverSupport, colors } from '@styles/utils';

const root = css`
  background-color: ${colors.white};
  padding: 9px 0;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: ${colors.codGray};
  border: 1px solid transparent;
  border-radius: 0;
  font-weight: bold;
  width: 100%;
  transition: box-shadow 0.2s;
  text-transform: uppercase;

  ${media.medium} {
    padding: 6px 0;
    font-size: 15px;
  }

  ${hoverSupport} {
    &:hover {
      box-shadow: 0px 4px 96px ${colors.white}, 0px 4px 34px ${colors.white};
    }
  }
  
  &:active {
    border-color: ${colors.white};
    background-color: ${colors.codGray};
    color: ${colors.white};
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.88);
  }
    

  &:focus {
    box-shadow: 0px 4px 96px ${colors.white}, 0px 4px 34px ${colors.white};
  }
`;
  

const Button = ({ className, children, onClick, tabIndex }) => (
  <button
    className={cx(root, className)}
    onClick={onClick}
    type="button"
    tabIndex={tabIndex}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  tabIndex: 1,
};

export default Button;
