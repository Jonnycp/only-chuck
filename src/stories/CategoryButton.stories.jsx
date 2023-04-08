import React from 'react';

import CategoryButton from "../components/CategoryButton";
import category2Symbol from "../utils/category2Symbol";

export default {
  component: CategoryButton,
  title: 'CategoryButton',
  argTypes: {
    selected: { control: { type: "select", options: Object.keys(category2Symbol)} },
  },
}

const Template = (args) => <CategoryButton {...args} />;

export const Big = Template.bind({});
Big.args = {
    selected: "random",
    setCategory: (s) => console.log(s)
};

export const Small = Template.bind({});
Small.args = {
    selected: "random",
    setCategory: (s) => console.log(s)
};
Small.parameters = {
    viewport: {
        defaultViewport: "mobile1"
    }
};
export const Error = Template.bind({});
Error.args = {
    selected: "CHUCK",
    setCategory: (s) => console.log(s)
};
