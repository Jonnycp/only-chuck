import React from 'react';

import Logo from "../components/Logo";

export default {
  component: Logo,
  title: 'Logo',
}

const Template = (args) => <div style={{background: "#000"}}><Logo {...args} /></div>;

export const Normal = Template.bind({});
Normal.args = {};