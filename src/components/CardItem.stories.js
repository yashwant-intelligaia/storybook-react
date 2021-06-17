import React from 'react';

import CardItem from './CardItem';

export default {
  component: CardItem,
  title: 'CardItem',
};

const Template = args => <CardItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    color: '#ccc'
  },
};

export const Favorite = Template.bind({});
Favorite.args = {
  task: {
    ...Default.args.task,
    color: 'red',
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  task: {
    ...Default.args.task,
    disabled: true
  },
};

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };
