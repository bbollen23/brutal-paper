import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import './Tooltip.scss'


interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg'
}

interface Position {
    left: number;
    top: number;
}

const Tooltip = ({ children, content, size = "md" }: TooltipProps): JSX.Element => {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState<Position>({ left: 0, top: 0 });

    const width = size === "md" ? 200 : size === "lg" ? 400 : 100;

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = event.currentTarget; // The element being hovered over
        const targetRect = targetElement.getBoundingClientRect(); // Get the dimensions and position of the target element
        console.log(targetRect.left);

        let positionLeft = targetRect.left;
        let positionTop = targetRect.top - targetRect.height - 20;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (positionLeft + width + 20 > viewportWidth) {
            positionLeft = positionLeft - (width - targetRect.width) - 20;
        }

        if (positionTop + (width / 2) > viewportHeight) {
            positionTop = positionTop - (width / 2) - 20;
        }


        setPosition({
            left: positionLeft, // Center the tooltip based on its width
            top: positionTop// Position it above the element, accounting for height
        });
        setVisible(true);
    };

    const handleMouseOut = () => {
        setVisible(false);
    };


    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='bp-tooltip-container'>
            {children}
            {visible &&
                ReactDom.createPortal(
                    <div
                        className={`bp-tooltip ${size}`}
                        style={{ top: `${position.top}px`, left: `${position.left}px` }}
                    ><div>{content}</div>
                    </div>, document.body
                )}
        </div>
    )
}

export default Tooltip;