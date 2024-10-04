import React from 'react'

export interface DrawerItemProps {
    children?: React.ReactNode;
    label?: string;
    icon?: string;
}

const DrawerItem = ({ children, label, icon }: DrawerItemProps): JSX.Element => {
    return (
        <div className='bp-drawer-item'>
            {icon ? <i className={`${icon}`}></i> : null}
            {children ? children : <span>{label}</span>}
        </div>
    )
}

export default DrawerItem;