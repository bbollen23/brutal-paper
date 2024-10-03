import React from 'react'
import './Card.scss'

export interface CardProps {
    size?: string
    children?: React.ReactNode
    title?: string,
    backgroundColor?: string
}



const Card = ({ size, children, title, backgroundColor }: CardProps): JSX.Element => {
    return (
        <div className={size === 'sm' ? 'bp-card-container card-small' : 'bp-card-container'}>
            <div className='card' style={{ backgroundColor }}>
                <div className='card-content'>
                    <div className='title-container'>
                        <div className='title'>{title}</div>
                        <div className='line'></div>
                    </div>
                    <p className="card-text">
                        {children}
                    </p>
                </div>
            </div>
            <div className='card-border'></div>
            <div className='card-shadow'></div>
        </div>
    )
}

export default Card;