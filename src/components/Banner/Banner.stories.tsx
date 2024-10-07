import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner from "./Banner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Banner",
    component: Banner,
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) =>
    <div style={{ width: '600px' }}><Banner {...args} /></div>
    ;

export const AlertBanner = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertBanner.args = {
    type: 'alert',
    children: <div>Here is an alert!</div>
};

