import React from 'react'
import './ActionIcon.scss'


export interface ActionIconProps {
    icon: string;
    label?: string;
    style?: React.CSSProperties;
    size?: 'xs' | 'sm' | 'lg';
    type?: 'shading' | 'move';
}

const ActionIcon = ({ icon, label, style, size }: ActionIconProps): JSX.Element => {
    return (
        <div style={style} className={size ? `bp-action-icon ${size}` : `bp-action-icon`}>
            <i className={`bi ${icon}`}></i>
            {label ? <span>{label}</span> : null}
        </div>
    )
}

export default ActionIcon;