import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionIcon from "./ActionIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/ActionIcon",
    component: ActionIcon,
} as ComponentMeta<typeof ActionIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActionIcon> = (args) => {
    return (
        <div style={{ width: '100px', height: '100px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ActionIcon {...args} />
        </div>
    );
};

export const NoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLabel.args = {
    icon: 'bi-globe'
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
    icon: 'bi-globe',
    label: 'App'
};

export const SmLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmLabel.args = {
    icon: 'bi-globe',
    label: 'App',
    size: "sm"
};

export const XsLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XsLabel.args = {
    icon: 'bi-globe',
    label: 'App',
    size: "xs"
};

