import React from "react";
import "./Button.scss";

export interface ButtonProps {
    label: string;
    backgroundColor?: string;
    size?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

interface ClassNameProps {
    size?: string,
    isClicked: boolean
}

const getClassNames = ({ size, isClicked }: ClassNameProps): string => {
    let className = 'bp-btn-container';
    if (size == 'sm') {
        className = `${className} btn-small`
    }
    if (isClicked) {
        className = `${className} clicked`
    }
    return className
}



const Button = ({ size, backgroundColor, style, label, onClick }: ButtonProps): JSX.Element => {

    const [isClicked, setIsClicked] = React.useState<boolean>(false);


    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick) {
            onClick();
        }
    }

    const buttonClasses = getClassNames({ size, isClicked });

    return (
        <div style={style} onClick={handleClick} className={buttonClasses}>
            <div className="btn" style={{ backgroundColor }}>
                {label}
            </div>
            <div className="btn-shadow"></div>
        </div>

    );
};

export default Button;