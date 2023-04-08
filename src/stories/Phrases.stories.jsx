import React from 'react';
import Phrases from '../components/Phrases';
import category2Symbol from '../utils/category2Symbol';

export default {
  title: 'Phrases',
  component: Phrases,
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
    frasi : {
        name: "frasi",
        control: {
            type: "array",
            required: true,
        },
        table: {
            type: { summary: 'array' },
            defaultValue: { summary: ["Scorri per iniziare"] },
        },
        description: "Frasi generate inserite nello swiper",
        defaultValue: ["Scorri per iniziare"],
    },
    setFrasi: {
      action: "setFrasi",
      description: "Setter per la frasi. Viene chiamato ogni volta che viene generata una nuova frase",
      control: {
        required: true
      },
      table: {
        type: { summary: 'function' },
      },
    },
    currentSlide: {
        name: "currentSlide",
        control: {
            type: "number",
            required: true,
        },
        table: {
            type: { summary: 'number' },
            defaultValue: { summary: 0 },
        },
        description: "Slide corrente (Inizia da 1, 0 è la prima slide vuota)",
        defaultValue: 0,
    },
    setCurrentSlide: {
        action: "setCurrentSlide",
        description: "Setter per la currentSlide. Viene chiamato ogni volta che si scorre lo swiper",
        table: {
            type: { summary: 'function' },
            required: true
        },
    },
  },
  parameters: {
    layout: 'fullscreen',
  }

};

const Template = (args) => <Phrases {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  category: "random",
  setCategory: (s) => console.log(s),
  frasi: ["Scorri per iniziare", "Saluta", "Anche tu", "Jonny"],
  setFrasi: (s) => console.log(s),
};

export const Error = Template.bind({});
Error.args = {
    category: "sport",
    setCategory: (s) => console.log(s),
    frasi: ["Scorri per iniziare"],
    _error: true,
    setFrasi: (s) => console.log(s),
};