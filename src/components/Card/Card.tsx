import React from 'react'
import './Card.scss'

export interface CardProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    children?: React.ReactNode
    title?: string,
    actions?: React.ReactNode
    actionPosition?: 'bottom' | 'right';
    style?: React.CSSProperties
    className?: string
}



const Card = ({ size, children, title, actions, style, className, actionPosition }: CardProps): JSX.Element => {
    return (
        <div style={style} className={size === 'sm' ? `bp-card-container bp-card-sm ${className}` : `bp-card-container ${className}`}>
            <div className={actionPosition ? `bp-card ${actionPosition}-actions` : `bp-card`}>
                <div className='bp-card-content'>
                    <div className='bp-title-container'>
                        <div className='bp-title'>{title}</div>
                        <div className='bp-line'></div>
                    </div>
                    <div className="bp-card-text">
                        {children}
                    </div>
                </div>
                {actions ? <div className="bp-card-actions">{actions}</div> : null}
            </div>
            <div className='bp-card-border'></div>
            <div className='bp-card-shadow'></div>
        </div>
    )
}

export default Card;