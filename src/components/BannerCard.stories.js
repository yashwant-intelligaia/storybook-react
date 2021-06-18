import React from 'react';

import BannerCard from './BannerCard';

export default {
  component: BannerCard,
  title: 'BannerCard',
};

const Template = args => <BannerCard {...args} />;

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
