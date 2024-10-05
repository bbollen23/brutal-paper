import React from "react";
import './Layout.scss';

export interface LayoutProps {
    children: React.ReactNode;
    className: string
}

const Layout = ({ children, className }: LayoutProps): JSX.Element => {
    return (
        <div className={className ? `bp-layout ${className}` : 'bp-layout'}>
            {children}
        </div>)
}

export default Layout;