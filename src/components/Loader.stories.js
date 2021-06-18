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
  width: "xsmall",
  height: "xsmall",
  title: "Loading",
  size: "xsmall"
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  width: "small",
  height: "small",
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