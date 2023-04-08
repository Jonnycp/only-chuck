import React from "react";

import CategoryModal from "../components/CategoryModal";
import category2Symbol from "../utils/category2Symbol";

export default {
  component: CategoryModal,
  title: "CategoryModal",
  argTypes: {
    setCategory: {
      action: "setCategory",
      description: "Setter per la categoria",
      table: {
        type: { summary: "function" },
      },
    },
    setOpen: {
      action: "setOpen",
      description: "Setter per la apertura del modal",
      table: {
        type: { summary: "function" },
      },
    },
    category2Symbol: {
      name: "category2Symbol",
      control: {
        type: "object",
        required: true,
      },
      table: {
        type: { summary: "object" },
        defaultValue: { summary: category2Symbol },
      },
      description: "Mappa tra categoria e simbolo",
      defaultValue: category2Symbol,
    },
  },
};

const Template = (args) => <CategoryModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  category2Symbol: category2Symbol
};
