import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => {
    return (
        <div style={{ width: '200px', height: '200px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon {...args} />
        </div>
    );
};

export const NoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLabel.args = {
    icon: 'bi bi-globe'
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
    icon: 'bi bi-globe',
    label: 'App',
    type: 'shading-and-move'
};

export const SmLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmLabel.args = {
    icon: 'bi bi-globe',
    label: 'App',
    size: "sm"
};

export const XsLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XsLabel.args = {
    icon: 'bi bi-globe',
    label: 'App',
    size: "xs"
};

export const LgLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LgLabel.args = {
    icon: 'bi bi-globe',
    label: 'App',
    size: "lg"
};

