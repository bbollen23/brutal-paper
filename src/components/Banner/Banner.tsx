import React from 'react';
import Icon from '../Icon';
import './Banner.scss';

export interface BannerProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    type?: 'alert' | 'success' | 'warning' | 'info';
    actions?: React.ReactNode;
}

const Banner = ({ children, type, style }: BannerProps): JSX.Element => {


    const iconClass = (type: BannerProps['type']): string => {
        switch (type) {
            case 'info':
                return 'bi bi-info-square'
            case 'alert':
                return 'bi bi-exclamation-octagon';
            case 'warning':
                return 'bi bi-exclamation-triangle';
            case 'success':
                return 'bi bi-check-circle';
            default:
                return 'bi bi-info-square';
        }
    }


    return (
        <div style={style} className={`bp-banner ${type ? type : 'info'}`}>
            <Icon type="none" icon={iconClass(type)} />
            {children}
        </div>
    )
}

export default Banner;