import React from 'react';
import './Sidebar.scss';


export interface SidebarProps {
    children?: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
    return (
        <div className="bp-sidebar-container">

        </div>
    )
}

export default Sidebar;