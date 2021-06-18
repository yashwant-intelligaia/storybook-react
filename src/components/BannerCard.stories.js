import React from 'react';

import BannerCard from './BannerCard';

export default {
  component: BannerCard,
  title: 'Banner',
};

const Template = args => <BannerCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    disabled: false
  },
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
