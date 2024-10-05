import React from 'react';

export interface SidebarHeaderProps {
    children?: React.ReactNode
}

const SidebarHeader = ({ children }: SidebarHeaderProps): JSX.Element => {
    return (
        <div className="bp-sidebar-header">
            {children}
        </div>
    )
}

export default SidebarHeader;