import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SmallClickMe = Template.bind({});
SmallClickMe.args = {
    label: "Click me!",
    backgroundColor: '#f3f4f6',
    size: "sm",
    disabled: true

};

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!",
    backgroundColor: '#f3f4f6'
};

