import React from 'react';
import './DrawerHeader.scss';
import "bootstrap-icons/font/bootstrap-icons.css"
import { useDrawer } from '../DrawerContext';

export interface DrawerHeaderProps {
    title: string
    closeButton: boolean
}

const DrawerHeader = ({ title, closeButton }: DrawerHeaderProps): JSX.Element => {
    const { closeDrawer } = useDrawer();
    return (
        <div className='bp-drawer-header'>
            <div className='bp-drawer-title'>{title}</div>
            {closeButton ? <i onClick={closeDrawer} className="bp-drawer-close bi bi-x-lg"></i> : null}
        </div>
    )
}

export default DrawerHeader;