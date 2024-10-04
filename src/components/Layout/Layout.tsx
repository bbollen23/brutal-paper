import React from "react";
import './Layout.scss';

export interface LayoutProps {
    children: React.ReactNode;
    type?: string
}

const Layout = ({ children, type }: LayoutProps): JSX.Element => {
    return (
        <div className={type ? `bp-layout ${type}` : 'bp-layout'}>
            {children}
        </div>)
}

export default Layout;