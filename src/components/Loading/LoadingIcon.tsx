import React from 'react';
import './Loading.scss';

export interface LoadingIconProps {
    visible?: boolean;
}

const LoadingIcon = ({ visible }: LoadingIconProps): JSX.Element => {
    return (
        <div className="bp-loading-icon-container">
            {visible ? <div className="bp-loading-dots">
                <div className="bp-dot"></div>
                <div className="bp-dot"></div>
                <div className="bp-dot"></div>
            </div> : null}
        </div>
    )
}

export default LoadingIcon;