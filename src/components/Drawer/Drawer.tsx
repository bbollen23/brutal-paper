import React, { useState, useEffect } from 'react'
import './Drawer.scss'
import { DrawerProvider } from './DrawerContext';


export interface DrawerProps {
    children?: React.ReactNode;
    opened: boolean;
    onChange?: (isOpen: boolean) => void;
    backgroundColor?: string;
    style?: React.CSSProperties;
    closeOnOutside?: boolean;
    alignment?: 'left' | 'right';
}

const Drawer = ({ alignment, closeOnOutside, children, opened, onChange, style, backgroundColor }: DrawerProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(opened ?? false);

    useEffect(() => {
        setIsOpen(opened ?? false);

    }, [opened])

    const closeDrawer = () => {
        setIsOpen(opened ?? false);
        if (onChange) {
            onChange(false);
        }
    }

    const handleClickOutside = () => {
        if (closeOnOutside) {
            closeDrawer();
        }
    }


    return (
        <DrawerProvider closeDrawer={closeDrawer}>
            <div
                onClick={handleClickOutside}
                className={`bp-drawer-wrapper ${isOpen ? 'open' : 'closed'}`}
            >
                <div
                    className={`bp-drawer-container ${isOpen ? 'open' : 'closed'} alignment-${alignment === 'right' ? 'right' : 'left'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        style={{ ...style, backgroundColor }} className="bp-drawer-content"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </DrawerProvider>
    )
}

export default Drawer;