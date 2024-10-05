import React from 'react';
import './Scrollable.scss';

export interface ScrollableProps {
    children: React.ReactNode;
    width: string;
    height: string;
    style?: React.CSSProperties;
}


const Scrollable = ({ style, width, height, children }: ScrollableProps): JSX.Element => {
    return (
        <div style={{ ...style, width, height }} className="bp-scrollable-container">
            {children}
        </div>
    )
}

export default Scrollable;