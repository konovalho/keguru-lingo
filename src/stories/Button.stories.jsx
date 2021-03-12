import React from 'react';
import Button from '../common/components/Button';
import { css } from '@linaria/core';

export default {
  title: 'Button',
  component: Button,
};

const root = css`
  background-color: green;
  padding: '10px'
`;

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Almost before we knew it, we had left the ground.',
  variant: 'metaTitle',
  tag: 'h1',
  className: root,
};
