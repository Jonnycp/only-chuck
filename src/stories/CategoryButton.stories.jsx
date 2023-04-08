import React from "react";

import CategoryButton from "../components/CategoryButton";
import category2Symbol from "../utils/category2Symbol";

export default {
  component: CategoryButton,
  title: "CategoryButton",
  argTypes: {
    selected: {
      name: "selected",
      control: {
        type: "select",
        options: Object.keys(category2Symbol),
        required: true,
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'random' },
      },
      description: "Categoria Selezionata",
      defaultValue: "random",
    },
    setCategory: {
      action: "setCategory",
      description: "Setter per la categoria",
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

const Template = (args) => <CategoryButton {...args} />;

export const Big = Template.bind({});
Big.args = {
  selected: "random"
};

export const Small = Template.bind({});
Small.args = {
  selected: "random"
};
Small.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};
export const Error = Template.bind({});
Error.args = {
  selected: "JONNY"
};
