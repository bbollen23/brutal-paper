import React from "react";
import "./Button.scss";
import ReactDom from 'react-dom';

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
}

interface ClassNameProps {
    size?: string;
    isClicked: boolean;
    flat?: boolean;
    disabled?: boolean;
    theme?: 'primary' | 'confirm' | 'cancel' | 'previous' | 'delete';
}

export interface Position {
    left: number;
    top: number;
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



const Button = ({ dropdown, dropdownList, theme, disabled, size, style, label, onClick, flat }: ButtonProps): JSX.Element => {

    const [isClicked, setIsClicked] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<Position>({ left: 0, top: 0 })

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick && !dropdown) {
            onClick();
        } else if (dropdown) {
            if (!open) {
                const targetElement = event.currentTarget;
                const targetRect = targetElement.getBoundingClientRect();

                let positionLeft = targetRect.left;
                let positionTop = targetRect.top + 30;

                setPosition({
                    left: positionLeft,
                    top: positionTop
                });
                setOpen(true);
            } else {
                setOpen(false);
            }
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
            {open && dropdown &&
                ReactDom.createPortal(
                    <div className="bp-dropdown-menu" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
                        <div>2023</div>
                        <div>2022</div>
                        <div>2021</div>
                        <div>2020</div>
                    </div>, document.body
                )}
        </div>

    );
};

export default Button;