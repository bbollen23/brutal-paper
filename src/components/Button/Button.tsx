import React from "react";
import "./Button.scss";

export interface ButtonProps {
    label: string;
    size?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    flat?: boolean;
    disabled?: boolean;
    theme?: 'primary' | 'confirm' | 'cancel' | 'previous' | 'delete';
}

interface ClassNameProps {
    size?: string;
    isClicked: boolean;
    flat?: boolean;
    disabled?: boolean;
    theme?: 'primary' | 'confirm' | 'cancel' | 'previous' | 'delete';
}

const getClassNames = ({ theme, size, isClicked, flat, disabled }: ClassNameProps): string => {
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
    return className
}



const Button = ({ theme, disabled, size, style, label, onClick, flat }: ButtonProps): JSX.Element => {

    const [isClicked, setIsClicked] = React.useState<boolean>(false);


    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick) {
            onClick();
        }
    }

    const buttonClasses = getClassNames({ theme, size, isClicked, flat, disabled });

    return (
        <div style={style} className="bp-btn-wrapper">
            <div onClick={handleClick} className={buttonClasses}>
                <div className="bp-btn">
                    {label}
                </div>
                {!flat && !disabled && !(theme === 'cancel') ? <div className="bp-btn-shadow"></div> : null}
            </div>

        </div>

    );
};

export default Button;