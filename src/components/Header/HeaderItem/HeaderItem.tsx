import React from 'react';


interface HeaderItemProps {
    onClick?: () => void;
    label: string;
}

const HeaderItem = ({ onClick, label }: HeaderItemProps): JSX.Element => {

    const handleOnClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <div onClick={handleOnClick} className='bp-header-item'>
            <div className='bp-label-container'>{label}<div className="bp-line"></div></div>

        </div>
    )
}

export default HeaderItem;