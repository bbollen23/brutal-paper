import React from 'react';
import './Header.scss';

export interface HeaderProps {
    children?: React.ReactNode
}

const Header = ({ children }: HeaderProps): JSX.Element => {
    return (
        <div className="bp-header">
            {children}
        </div>
    )
}

export default Header;