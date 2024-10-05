import React from 'react'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Icon.scss'


export interface IconProps {
    icon: string;
    label?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'shading' | 'move' | 'shading-and-move';
    iconStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties
}

const Icon = ({ iconStyle, labelStyle, icon, label, style, size, type, onClick }: IconProps): JSX.Element => {
    const classSize = size ? size : 'md';
    let classType = 'shading-type';
    if (type) {
        if (type === 'shading-and-move') {
            classType = 'shading-type move-type';
        } else {
            classType = `${type}-type`
        }
    }

    return (
        <div onClick={onClick} style={style} className={`bp-action-icon ${classSize} ${classType}`}>
            <i style={iconStyle} className={`${icon}`}></i>
            {label ? <span style={labelStyle}>{label}</span> : null}
        </div>
    )
}

export default Icon;