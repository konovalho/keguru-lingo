import React from 'react';
import Button from '../common/components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Almost before we knew it, we had left the ground.',
  variant: 'metaTitle',
  tag: 'h1'
};
