import React from "react";
import WheelComponent from "../components/Wheel";
import { generateColors, generateSegments } from "../utils/functions";
import category2Symbol from "../utils/category2Symbol";

export default {
  component: WheelComponent,
  title: "Wheel",
  argTypes: {
    segments: {
      control: {
        type: "array",
        required: true,
      },
      table: {
        type: { summary: "array" },
      },
      description: "Segmenti della ruota",
    },
    segColors: {
      control: {
        type: "array",
        required: true,
      },
      table: {
        type: { summary: "array" },
      },
      description: "Colori dei segmenti",
    },
    winningSegment: {
      control: {
        type: "string",
        required: false,
      },
      table: {
        type: { summary: "string" },
      },
      description: "Segmento vincente (opzionale)",
    },
    onFinished: {
      control: {
        type: "function",
        required: false,
      },
      table: {
        type: { summary: "function" },
      },
      description:
        "Funzione da eseguire al termine della rotazione (opzionale)",
    },
    primaryColor: {
      control: {
        type: "color",
        required: false,
      },
      table: {
        type: { summary: "color" },
        defaultValue: { summary: "black" },
      },
      description: "Colore primario della ruota",
      defaultValue: "black",
    },
    contrastColor: {
      control: {
        type: "color",
        required: false,
      },
      table: {
        type: { summary: "color" },
        defaultValue: { summary: "white" },
      },
      description: "Colore contrastante della ruota",
      defaultValue: "white",
    },
    buttonText: {
      control: {
        type: "string",
        required: false,
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Spin" },
      },
      description: "Testo del pulsante",
      defaultValue: "Spin",
    },
    isOnlyOnce: {
      control: {
        type: "boolean",
        required: false,
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      description: "Se true, la ruota può essere girata solo una volta",
      defaultValue: true,
    },
    size: {
      control: {
        type: "number",
        required: false,
      },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "290" },
      },
      description: "Dimensione della ruota",
      defaultValue: 290,
    },
    upDuration: {
      control: {
        type: "number",
        required: false,
      },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      description: "Durata del tratto ascendente della rotazione",
      defaultValue: 100,
    },
    downDuration: {
      control: {
        type: "number",
        required: false,
      },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1000" },
      },
      description: "Durata del tratto discendente della rotazione",
      defaultValue: 1000,
    },
    fontFamily: {
      control: {
        type: "string",
        required: false,
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "proxima-nova" },
      },
      description: "Font della ruota",
      defaultValue: "proxima-nova",
    },
  },
};

const Template = (args) => <WheelComponent {...args} />;

export const InProject = Template.bind({});
InProject.args = {
  segments: generateSegments(category2Symbol),
  segColors: generateColors(Object.keys(category2Symbol).length),
  onFinished: (winner) => {
    console.log(winner);
  },
  primaryColor: "#000",
  contrastColor: "white",
  buttonText: "Spin",
  isOnlyOnce: true,
  upDuration: 100,
  downDuration: Math.floor(Math.random() * 900) + 150,
  fontFamily: "Roboto Condensed",
  size: window.innerWidth <= 375 ? 160 : 200,
};

export const Roulette = Template.bind({});
Roulette.args = {
    segments: ["0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36", "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9", "22", "18", "29", "7", "28", "12", "35", "3", "26"],
    segColors: ["#21e021", "#ff0000", "#000", "#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000"],
    buttonText: "LUDOPATIA",
    size: 200,
    downDuration: Math.floor(Math.random() * 900) + 150,
    isOnlyOnce: false
};

export const Truccato = Template.bind({});
Truccato.args = {
    segments: ["0", "32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36", "11", "30", "8", "23", "10", "5", "24", "16", "33", "1", "20", "14", "31", "9", "22", "18", "29", "7", "28", "12", "35", "3", "26"],
    segColors: ["#21e021", "#ff0000", "#000", "#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000","#ff0000", "#000"],
    buttonText: "LUDOPATIA",
    size: 200,
    winningSegment: "32",
    isOnlyOnce: false,
};