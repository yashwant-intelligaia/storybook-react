import React from 'react';
import Alerts from './Alerts';

export default {
  component: Alerts,
  title: 'Alerts',
};

const Template = args => <Alerts {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'ok',
  duration: 3000,
  message: "Your message has been sent successffully.",
  position: "bottom"
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  type: 'error',
  message: "A problem has been occurred while submitting your data."
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: 'warning',
  message: "There was a problem with your network connection."
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  type: 'info',
  message: "Please read the comment carefully."
};