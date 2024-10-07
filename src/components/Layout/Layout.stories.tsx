import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Drawer, DrawerHeader, DrawerItem } from "../Drawer";
import Layout from "./Layout";
import { Header, HeaderItem, HeaderTitle, HeaderGroup } from "../Header";
import Icon from '../Icon';
import Card from "../Card";
import Button from "../Button";
import Body from "../Body";
import { Modal, ModalHeader, ModalContent } from "../Modal";
import Input from "../Input";
import { Sidebar, SidebarItem, SidebarSectionTitle } from "../Sidebar";
import Scrollable from "../Scrollable";
import Divider from "../Divider";
import Tabs from "../Tabs";
import { LoadingIcon } from "../Loading";
import { useNotification, NotificationType } from "../Notification/NotificationContext";
import Banner from "../Banner";
import Footer from "../Footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Layout",
    component: Layout,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => {

    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);

    const toggleDrawer = () => {
        setDrawerOpened((prev) => !prev);
    }


    const customValidator = (value: string) => {
        return value.length > 8;
    };

    const customValidatorUsername = (value: string) => {
        return value.length > 2;
    };

    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpened((prev) => !prev);
    }

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        if (key === 'username') {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    const handleModalClose = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <Layout>
            <Header>
                <HeaderTitle>MuView</HeaderTitle>
                <HeaderGroup>
                    <HeaderItem label="Albums"></HeaderItem>
                    <HeaderItem label="Community"></HeaderItem>
                </HeaderGroup>
                <HeaderGroup alignment="right">
                    <Button label="Sign Up" />
                    <Button onClick={toggleModal} label="Login" />
                    <Icon icon="bi bi-gear" onClick={toggleDrawer} />
                </HeaderGroup>
            </Header>
            <Body>

                {args.children}
            </Body>
            <Drawer opened={drawerOpened} closeOnOutside onChange={setDrawerOpened} >
                <DrawerHeader title="Brian Bollen, Ph.D." closeButton />
                <DrawerItem icon="bi bi-house" label="Home" />
                <DrawerItem icon="bi bi-bar-chart-steps" label="Projects" />
                <DrawerItem icon="bi bi-activity" label="Research" />
            </Drawer>
            <Modal
                style={{ maxWidth: '500px' }}
                opened={modalOpened}
                setOpened={setModalOpened}
                onClose={handleModalClose}
                closeOnOutside
                actions={
                    <>
                        <Button flat label='Cancel' />
                        <Button disabled={!(username !== '' && customValidator(password))} label='Log In' onClick={toggleModal} />
                    </>
                }>
                <ModalHeader
                    closeButton={true}
                    title='Please Log In'
                />
                <ModalContent style={{ marginBottom: '20px' }}>
                    <div className="flex-col gap-20">
                        <div style={{ fontSize: '1.2rem' }}>
                            Please enter in your credentials.
                        </div>
                        <Input
                            onChange={(e) => handleInputChange(e, 'username')} value={username}
                            label='Username'
                            errorMessage='Oh no!'
                            validator={customValidatorUsername}
                        />
                        <Input
                            onChange={(e) => handleInputChange(e, 'password')} value={password}
                            label='Password'
                            errorMessage="Password must be at least 8 characters in length"
                            validator={customValidator}
                            type='password'
                        />
                    </div>
                </ModalContent>
            </Modal>
            <Footer />
        </Layout>

    );
};


export const MuView = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MuView.args = {
    children:
        <>
            <div style={{ marginLeft: '20px', width: '500px' }}>
                <Card className='bp-mt-md' size="sm" title="Loon" actionPosition="right" actions={
                    <>
                        <Button flat label='Cancel' size="sm" />
                        <Button label='Okay' size="sm" />
                    </>
                }>
                    A cell microscopy visualization platform for large-scale cell data analysis

                </Card>
                <Card className='bp-mt-md' size="sm" title="Loon" actions={
                    <>
                        <Button flat label='Cancel' size="sm" />
                        <Button label='Okay' size="sm" />
                    </>
                }>
                    A cell microscopy visualization platform for large-scale cell data analysis
                </Card>


            </div>
        </>


};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const SidebarTemplate: ComponentStory<typeof Layout> = (args) => {

    const { notify } = useNotification();
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);

    const toggleDrawer = () => {
        setDrawerOpened((prev) => !prev);
    }

    const customValidator = (value: string) => {
        return value.length > 8;
    };

    const customValidatorUsername = (value: string) => {
        return value.length > 2;
    };

    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpened((prev) => !prev);
    }

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        if (key === 'username') {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    const handleModalClose = () => {
        setUsername('');
        setPassword('');
        setLoading(false);
    }

    const [darkMode, setDarkMode] = useState<boolean>(false);

    const notifyTypes: NotificationType['type'][] = ['alert', 'info', 'warning', 'success']
    const notifyMessages: string[] = ['Danger Danger! Oh no!!', 'Just letting you know', 'Be careful!', 'Sweet!']
    const [notifyIndex, setNotifyIndex] = useState<number>(0);

    const handleDarkMode = () => {
        let storyBookRoot = document.getElementById('storybook-root')

        if (storyBookRoot) {
            if (darkMode === false) {
                storyBookRoot.classList.add('dark-mode')
            } else {
                storyBookRoot.classList.remove('dark-mode')
            }
        }

        setDarkMode(prev => !prev);
    }

    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = () => {
        setLoading(true);
    }

    const handleNotify = () => {
        notify({
            message: notifyMessages[notifyIndex],
            type: notifyTypes[notifyIndex]
        })

        setNotifyIndex(prev => (prev + 1) % 4);
    }

    return (
        <Layout className='sidebar container no-right-margin smooth'>
            <Header>
                <HeaderTitle>MuView</HeaderTitle>
                <HeaderGroup>
                    <HeaderItem label="Albums"></HeaderItem>
                    <HeaderItem label="Community"></HeaderItem>
                </HeaderGroup>
                <HeaderGroup alignment="right">
                    <Button label="Sign Up" onClick={handleNotify} />
                    <Button onClick={toggleModal} label="Login" />
                    <Icon icon='bi bi-gear' onClick={toggleDrawer} />
                    <Icon icon='bi bi-moon' onClick={handleDarkMode} />
                </HeaderGroup>
            </Header>
            <Body>
                {args.children}
            </Body>
            <Modal
                style={{ maxWidth: '500px' }}
                opened={modalOpened}
                setOpened={setModalOpened}
                onClose={handleModalClose}
                closeOnOutside
                actions={
                    <>
                        <Button flat label='Cancel' />
                        <Button disabled={!(username !== '' && customValidator(password))} label='Log In' onClick={handleLogin} />
                        <LoadingIcon visible={loading} />
                    </>
                }>
                <ModalHeader
                    closeButton={true}
                    title='Please Log In'
                />
                <ModalContent style={{ marginBottom: '20px' }}>
                    <div className="flex-col gap-20">
                        <div style={{ fontSize: '1.2rem' }}>
                            Please enter in your credentials.
                        </div>
                        <Input
                            onChange={(e) => handleInputChange(e, 'username')} value={username}
                            label='Username'
                            errorMessage='Oh no!'
                            validator={customValidatorUsername}
                            placeholder="Your Username"
                        />
                        <Input
                            onChange={(e) => handleInputChange(e, 'password')} value={password}
                            label='Password'
                            errorMessage="Password must be at least 8 characters in length"
                            validator={customValidator}
                            type='password'
                            placeholder="Your Password"
                        />
                    </div>
                </ModalContent>
            </Modal>

            <Sidebar>
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>
                <Divider />
                <SidebarSectionTitle>
                    Section Title
                </SidebarSectionTitle>
                <SidebarItem icon='bi bi-house'>Item 1</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 2</SidebarItem>
                <SidebarItem icon='bi bi-house'>Item 3</SidebarItem>

            </Sidebar>
            <Drawer alignment='right' opened={drawerOpened} closeOnOutside onChange={setDrawerOpened} >
                <DrawerHeader title="Settings" closeButton />
                <DrawerItem icon="bi bi-house" label="Home" />
                <DrawerItem icon="bi bi-bar-chart-steps" label="Projects" />
                <DrawerItem icon="bi bi-activity" label="Research" />
            </Drawer>
            <Footer />
        </Layout>


    );
};

export const SidebarLayout = SidebarTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SidebarLayout.args = {
    children:
        <>
            <Scrollable width='100%' height='100%'>
                <div style={{ width: 'auto' }}>
                    <Card className='bp-mt-md' size="sm" title="Loon" actionPosition="right" actions={
                        <>
                            <Button flat label='Cancel' size="sm" theme='cancel' />
                            <Button label='Okay' size="sm" theme='primary' />
                        </>
                    }>
                        A cell microscopy visualization platform for large-scale cell data analysis

                    </Card>
                    <Card className='bp-mt-md' size="sm" title="Loon" actions={
                        <>
                            <Button flat label='Cancel' size="sm" />
                            <Button label='Okay' size="sm" theme='delete' />
                        </>
                    }>
                        A cell microscopy visualization platform for large-scale cell data analysis
                    </Card>
                    <Tabs
                        tabData={[
                            { label: 'Alert Banner', 'content': <div style={{ "margin": "10px" }}><Banner type='alert' actions={<Button flat label="Notify"></Button>}>Here is an info banner!!</Banner></div> },
                            { label: 'Warning Banner', 'content': <div style={{ "margin": "10px" }}><Banner type='warning' actions={<Button flat label="Notify"></Button>}>Here is an info banner!!</Banner></div> },
                            { label: 'Success Banner', 'content': <div style={{ "margin": "10px" }}><Banner type='success' actions={<Button flat label="Notify"></Button>}>Here is an info banner!!</Banner></div> },
                            { label: 'Info Banner', 'content': <div style={{ "margin": "10px" }}><Banner actions={<Button flat label="Notify"></Button>}>Here is an info banner!!</Banner></div> }
                        ]}
                    />
                </div>
            </Scrollable>



        </>


};





