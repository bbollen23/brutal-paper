import React from 'react';
import './Loading.scss'

export interface LoadingOverlayProps {
    visible?: boolean
}

const LoadingOverlay = ({ visible }: LoadingOverlayProps): JSX.Element => {
    return (
        <>
            {visible ? <div className="bp-loading-overlay-wrapper">
                <div className="bp-loading-dots">
                    <div className="bp-dot"></div>
                    <div className="bp-dot"></div>
                    <div className="bp-dot"></div>
                </div>
            </div> : null}
        </>
    )
}

export default LoadingOverlay;