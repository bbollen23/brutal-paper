import React from 'react'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Icon.scss'


export interface IconProps {
    icon: string;
    label?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'shading' | 'move' | 'shading-and-move' | 'none';
    iconStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties
    dense?: boolean;
}

const Icon = ({ dense, iconStyle, labelStyle, icon, label, style, size, type, onClick }: IconProps): JSX.Element => {
    const classSize = size ? size : 'md';
    let classType = 'shading-type';
    if (type) {
        if (type === 'shading-and-move') {
            classType = 'shading-type move-type';
        } else if (type !== 'none') {
            classType = `${type}-type`
        } else {
            classType = '';
        }
    }

    return (
        <div onClick={onClick} style={{ ...style, pointerEvents: type === 'none' ? 'none' : 'auto', cursor: type === 'none' ? 'auto' : 'cursor' }} className={`bp-action-icon ${classSize} ${classType} ${dense ? 'dense' : ''}`}>
            <i style={iconStyle} className={`${icon}`}></i>
            {label ? <span style={labelStyle}>{label}</span> : null}
        </div>
    )
}

export default Icon;