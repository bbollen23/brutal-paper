import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) =>
    <div style={{ width: '200px', padding: '10px', border: '1px solid grey' }}><Button {...args} /></div>
    ;

export const SmallClickMe = Template.bind({});
SmallClickMe.args = {
    label: "Click me!",
    size: "sm",
    disabled: true

};

export const CancelBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CancelBtn.args = {
    label: "Cancel",
    theme: 'cancel',
};

export const DeleteBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DeleteBtn.args = {
    label: "Delete",
    theme: 'delete',
};

export const ConfirmBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ConfirmBtn.args = {
    label: "Confirm",
    theme: 'confirm',
};

export const FlatBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlatBtn.args = {
    label: "Flat",
    flat: true,
};


