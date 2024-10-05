import React from 'react';
import './Header.scss';

export interface HeaderProps {
    children?: React.ReactNode,
    stretch?: boolean
}

const Header = ({ children, stretch }: HeaderProps): JSX.Element => {
    return (
        <div className={stretch ? `bp-header stretch` : `bp-header`}>
            {children}
        </div>
    )
}

export default Header;