import React from 'react';


interface HeaderTitleProps {
    children: React.ReactNode
}

const HeaderTitle = ({ children }: HeaderTitleProps): JSX.Element => {
    return (
        <div className="bp-header-title flex-row align-center">{children}</div>
    )
}

export default HeaderTitle;