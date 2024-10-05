import React from 'react';
import Icon from '../../Icon';
export interface SidebarItemProps {
    children?: React.ReactNode
    highlighted?: boolean;
    icon?: string;

}

const SidebarItem = ({ icon, highlighted, children }: SidebarItemProps): JSX.Element => {
    return (
        <div className={highlighted ? `bp-sidebar-item highlighted` : `bp-sidebar-item`}>
            {icon ? <Icon iconStyle={{ width: 'auto', height: 'auto', marginRight: '10px' }} icon={icon} size="sm" /> : null}
            <div className='bp-sidebar-item-content'>{children}</div>
        </div>
    )
}

export default SidebarItem;