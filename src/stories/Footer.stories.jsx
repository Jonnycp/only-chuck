import React from "react";

import Footer from "../components/Footer";

export default {
  component: Footer,
  title: "Footer",
  argTypes: {
    frase: {
      name: "frase",
      description: "Frase da copiare e condividere",
      defaultValue: "random",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    canCopyOverride: {
        name: "canCopyOverride",
        description: "Override la richiesta di permesso di copia. Utile solo per mostrarlo, ma la copia non funzionerà",
        defaultValue: false,
        control: {
            type: "boolean",
        },
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
          },
    }
  },
  parameters: {
    layout: 'bottom',
  },
};

const Template = (args) => (
  <div style={{height: "80vh", width: "100%", display: "flex", flexDirection: "column-reverse"}}>
    <Footer {...args} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  frase: "JJOKE",
  canCopyOverride: true,
};
export const CopyPermissionDenied = Template.bind({});
CopyPermissionDenied.args = {
  frase: "JJOKE",
  canCopyOverride: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  frase: "",
  canCopyOverride: true,
};

