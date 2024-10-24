import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Tooltip.scss'


interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    style?: React.CSSProperties;
    size?: 'sm' | 'md' | 'lg';
    timeoutLength?: number;
}

interface Position {
    left: number;
    top: number;
}

const Tooltip = ({ timeoutLength = 2000, style, children, content, size = "md" }: TooltipProps): JSX.Element => {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState<Position>({ left: 0, top: 0 });
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const tooltipTimeoutRef = useRef<number | undefined>();

    const width = size === "md" ? 200 : size === "lg" ? 400 : 100;

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('mouseOver');
        const targetElement = event.currentTarget;
        const targetRect = targetElement.getBoundingClientRect();
        let tooltipHeight = 0;
        let tooltipWidth = 0;
        if (tooltipRef.current) {
            tooltipHeight = tooltipRef.current.getBoundingClientRect().height;
            tooltipWidth = tooltipRef.current.getBoundingClientRect().width;
        }

        const dWidth = targetRect.width - tooltipWidth;


        let positionLeft = targetRect.left + (dWidth / 2);
        let positionTop = targetRect.top - tooltipHeight - 2;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (positionLeft + width + 20 > viewportWidth) {
            positionLeft = positionLeft - (width - targetRect.width) - 20;
        }

        if (positionTop + (width / 2) > viewportHeight) {
            positionTop = positionTop - (width / 2) - 20;
        }
        setPosition({
            left: positionLeft,
            top: positionTop
        });



        if (tooltipTimeoutRef.current !== null) {
            clearTimeout(tooltipTimeoutRef.current);
        }

        setVisible(true);

        tooltipTimeoutRef.current = window.setTimeout(() => {
            setVisible(false);
        }, timeoutLength);
    };

    const handleMouseOut = () => {
        setVisible(false);
        if (tooltipTimeoutRef.current) {
            clearTimeout(tooltipTimeoutRef.current);
            tooltipTimeoutRef.current = undefined;
        }
    };



    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='bp-tooltip-container'>
            {children}
            {
                ReactDOM.createPortal(
                    <div

                        ref={tooltipRef}
                        className={`bp-tooltip ${size} ${visible ? 'visible' : ''}`}
                        style={{ top: `${position.top}px`, left: `${position.left}px` }}
                    ><div style={style}>{content}</div>
                    </div>, document.body
                )}
        </div>
    )
}

export default Tooltip;