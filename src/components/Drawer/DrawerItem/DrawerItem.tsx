import React from 'react'

export interface DrawerItemProps {
    children?: React.ReactNode;
    label?: string;
    icon?: string;
    onClick?: () => void;
}

const DrawerItem = ({ onClick, children, label, icon }: DrawerItemProps): JSX.Element => {
    return (
        <div onClick={onClick} className='bp-drawer-item'>
            {icon ? <i className={`${icon}`}></i> : null}
            {children ? children : <span>{label}</span>}
        </div>
    )
}

export default DrawerItem;