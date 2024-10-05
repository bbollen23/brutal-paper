import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => {
    return (
        <div style={{ width: '800px', height: '500px', border: '1px solid black', padding: '40px' }}>
            <Tabs {...args} />
        </div>
    );
};

export const NoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLabel.args = {
    tabData: [
        {
            label: 'Item 1',
            content: <div>Test 1</div>
        },
        {
            label: 'Item 2',
            content: <div>Test 2</div>
        },
        {
            label: 'Item 3',
            content: <div>Test 3</div>
        }
    ],
    defaultIndex: 0
};



