import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Loon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loon.args = {
    title: "Loon",
    children: <div>A cell microscopy visualization platform for large-scale cell data analysis
    </div>
};

export const LoonSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoonSmall.args = {
    title: "Loon",
    children: <div>A cell microscopy visualization platform for large-scale cell data analysis
    </div>,
    size: "sm"
};

export const LoonSmallWhite = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoonSmallWhite.args = {
    title: "Loon",
    children: <div>A cell microscopy visualization platform for large-scale cell data analysis
    </div>,
    size: "sm",
    backgroundColor: '#f3f4f6'
};
