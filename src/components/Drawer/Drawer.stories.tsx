import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Drawer from "./Drawer";
import DrawerItem from "./DrawerItem/DrawerItem"
import DrawerHeader from "./DrawerHeader";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Drawer",
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => {

    const [drawerOpened, setDrawerOpened] = useState<boolean>(true);

    const toggleDrawer = () => {
        setDrawerOpened((prev) => !prev);
    }

    return (
        <div style={{ "height": '500px' }}>
            <Button
                style={{ zIndex: 0, position: 'absolute', left: '400px', top: '40px' }}
                onClick={toggleDrawer} label="Toggle Drawer" size="sm" />
            <Drawer opened={drawerOpened} onChange={setDrawerOpened} {...args} />
        </div>
    );
};

export const Loon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loon.args = {
    children: <>
        <DrawerHeader title="Brian C Bollen" closeButton />
        <DrawerItem label="Home" />
        <DrawerItem label="Projects" />
        <DrawerItem label="Research" />
    </>
};

export const LoonNew = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoonNew.args = {
    backgroundColor: 'white',
    closeOnOutside: true,
    children: <>
        <DrawerHeader title="Brian C Bollen" closeButton />
        <DrawerItem icon="bi-house" label="Home" />
        <DrawerItem icon="bi-kanban" label="Projects" />
        <DrawerItem icon="bi-bar-chart-line" label="Research" />
    </>
};


