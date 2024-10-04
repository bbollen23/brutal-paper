import React from "react";
import "./Button.scss";

export interface ButtonProps {
    label: string;
    backgroundColor?: string;
    size?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    flat?: boolean;
    disabled?: boolean;
}

interface ClassNameProps {
    size?: string;
    isClicked: boolean;
    flat?: boolean;
    disabled?: boolean;
}

const getClassNames = ({ size, isClicked, flat, disabled }: ClassNameProps): string => {
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
    return className
}



const Button = ({ disabled, size, backgroundColor, style, label, onClick, flat }: ButtonProps): JSX.Element => {

    const [isClicked, setIsClicked] = React.useState<boolean>(false);


    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick) {
            onClick();
        }
    }

    const buttonClasses = getClassNames({ size, isClicked, flat, disabled });

    return (
        <div style={style} onClick={handleClick} className="bp-btn-wrapper">
            <div className={buttonClasses}>
                <div className="bp-btn" style={{ backgroundColor }}>
                    {label}
                </div>
                {!flat && !disabled ? <div className="bp-btn-shadow"></div> : null}
            </div>

        </div>

    );
};

export default Button;