import React from 'react';
import Header from '../components/Header';
import category2Symbol from '../utils/category2Symbol';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    category: {
      name: "category",
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
  parameters: {
    layout: 'fullscreen',
  }

};

const Template = (args) => <Header {...args} />;

export const Big = Template.bind({});
Big.args = {
  category: "random"
};
export const Small = Template.bind({});
Small.args = {
  category: "animal"
};
Small.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};


