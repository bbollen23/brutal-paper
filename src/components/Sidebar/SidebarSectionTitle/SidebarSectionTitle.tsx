import React from 'react';

export interface SidebarSectionTitleProps {
    children?: React.ReactNode

}

const SidebarSectionTitle = ({ children }: SidebarSectionTitleProps): JSX.Element => {
    return (
        <div className="bp-sidebar-section-title">
            {children}
        </div>
    )
}

export default SidebarSectionTitle;