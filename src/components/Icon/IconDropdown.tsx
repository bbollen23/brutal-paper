import React, { useState, useRef, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Icon.scss'
import ReactDOM from 'react-dom';



export interface IconDropdownProps {
    icon: string;
    dropDownList: string[];
    label?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'shading' | 'move' | 'shading-and-move' | 'none';
    iconStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties
    dense?: boolean;
    onChange?: (value: string) => void;
}

export interface Position {
    left: number;
    top: number;
    width: number;
}

const IconDropdown = ({ onChange, dense, dropDownList, iconStyle, labelStyle, icon, label, style, size, type, onClick }: IconDropdownProps): JSX.Element => {
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

    const [open, setOpen] = useState<boolean>(false);
    const [position, setPosition] = useState<Position>({ left: 0, top: 0, width: 0 })
    const dropdownRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    // const handleOnClick = () => {
    //     setOpen(true);
    // }

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Prevent the event from bubbling up

        const targetElement = event.currentTarget;
        const targetRect = targetElement.getBoundingClientRect();

        const topAdjustment = size === 'sm' ? 40 : size === 'md' ? 50 : 100;
        if (targetRect) {
            let positionLeft = targetRect.left;
            let positionTop = targetRect.top + topAdjustment;

            setPosition({
                left: positionLeft,
                top: positionTop,
                width: 100,
            });
            setOpen(prev => !prev); // Toggle dropdown
        }

        if (onClick) {
            onClick(event);
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && iconRef.current && !iconRef.current.contains(event.target as Node)) {
            setOpen(false); // Close the dropdown if clicked outside
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);


    const handleOnChange = (event: React.MouseEvent<HTMLDivElement>, entry: string) => {
        event.stopPropagation(); // Prevent the event from bubbling up
        if (onChange) {
            onChange(entry)
        }
        setOpen(false);
    }

    return (
        <div onClick={handleOnClick} ref={iconRef} style={{ ...style, pointerEvents: type === 'none' ? 'none' : 'auto', cursor: type === 'none' ? 'auto' : 'cursor' }} className={`bp-action-icon ${classSize} ${classType} ${dense ? 'dense' : ''}`}>
            <i style={iconStyle} className={`${icon}`}></i>
            {label ? <span style={labelStyle}>{label}</span> : null}

            {open &&
                ReactDOM.createPortal(
                    <div ref={dropdownRef} className="bp-icon-dropdown-menu" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
                        {dropDownList.map((entry: string, index: number) =>
                            <div key={index} className='bp-icon-dropdown-item' onClick={(e) => handleOnChange(e, entry)}>
                                {entry}
                            </div>)}
                    </div>, document.body
                )
            }
        </div >
    )
}

export default IconDropdown;