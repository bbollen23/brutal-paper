import React from 'react';
import './Body.scss'


interface BodyProps {
    children?: React.ReactNode
}

const Body = ({ children }: BodyProps): JSX.Element => {
    return (
        <div className="bp-body">
            {children}
        </div>
    )
}

export default Body;