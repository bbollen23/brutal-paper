import React from 'react';
import { useDrawer } from '../DrawerContext';
import Icon from '../../Icon';

export interface DrawerHeaderProps {
    title: string
    closeButton: boolean
}

const DrawerHeader = ({ title, closeButton }: DrawerHeaderProps): JSX.Element => {
    const { closeDrawer } = useDrawer();
    return (
        <div className='bp-drawer-header'>
            <div className='bp-drawer-title'>{title}</div>
            {closeButton ? <Icon onClick={closeDrawer} icon="bi bi-x-lg" size="sm" /> : null}
        </div>
    )
}

export default DrawerHeader;