import React from 'react';
import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
};

const Template = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  showTitle: false,
  width: "small",
  height: "small",
  title: "Loading",
  size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  width: "medium",
  height: "medium",
  size: "medium"
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  width: "large",
  height: "large",
  size: "large"
};