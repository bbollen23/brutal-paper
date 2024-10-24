import React from "react";
import "./Button.scss";
import ReactDom from 'react-dom';
import { Icon } from "../Icon";

export interface ButtonProps {
    label: string;
    size?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    flat?: boolean;
    disabled?: boolean;
    theme?: 'primary' | 'confirm' | 'cancel' | 'previous' | 'delete';
    dropdown?: boolean;
    dropdownList?: string[]
    iconRight?: string;
}

interface ClassNameProps {
    size?: string;
    isClicked: boolean;
    flat?: boolean;
    disabled?: boolean;
    hasIconRight?: boolean;
    theme?: 'primary' | 'confirm' | 'cancel' | 'previous' | 'delete';
}

export interface Position {
    left: number;
    top: number;
}

const getClassNames = ({ theme, size, isClicked, flat, disabled, hasIconRight }: ClassNameProps): string => {
    let className = 'bp-btn-container';
    if (size == 'sm') {
        className = `${className} bp-btn-small`
    }
    if (flat) {
        className = `${className} flat`
    }
    if (disabled) {
        className = `${className} disabled`
    }
    if (isClicked) {
        className = `${className} clicked`
    }

    if (theme == 'delete') {
        className = `${className} delete`
    }
    if (theme == 'cancel') {
        className = `${className} cancel`
    }
    if (theme === 'confirm') {
        className = `${className} confirm`

    }
    if (theme === 'primary') {
        className = `${className} primary`
    }
    if (theme === 'previous') {
        className = `${className} flat`
    }

    if (hasIconRight) {
        className = `${className} icon-right`
    }
    return className
}



const Button = ({ iconRight, theme, disabled, size, style, label, onClick, flat }: ButtonProps): JSX.Element => {

    const [isClicked, setIsClicked] = React.useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick) {
            onClick();
        }
    }

    const hasIconRight = iconRight ? true : false;

    const buttonClasses = getClassNames({ theme, size, isClicked, flat, disabled, hasIconRight });

    return (
        <div style={style} className="bp-btn-wrapper">
            <div onClick={handleClick} className={buttonClasses}>
                <div className="bp-btn">
                    <span className='bp-btn-text'>{label}</span>
                    {iconRight ? <Icon dense type='none' size="xs" icon={iconRight} /> : null}
                </div>
                {!flat && !disabled && !(theme === 'cancel') ? <div className="bp-btn-shadow"></div> : null}
            </div>
        </div>

    );
};

export default Button;