import React, { useState, useEffect } from 'react';
import './Notification.scss'
import { NotificationType } from './NotificationContext';
import Icon from '../Icon';

interface NotificationProps {
    dismissTime: number | undefined;
    message: string;
    type: NotificationType['type'];
    handleDismiss: () => void;
}

const Notification = ({ dismissTime, message, type, handleDismiss }: NotificationProps): JSX.Element => {

    const iconClass = (type: NotificationType['type']): string => {
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

    const [manuallyDismissed, setManuallyDismissed] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // If there exists a dismiss time, set timer to remove it.
    useEffect(() => {
        if (dismissTime) {
            const timer = setTimeout(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    handleDismiss();
                }, 300)
            }, dismissTime - 300)
            return () => clearTimeout(timer);
        }
    })


    const setAnimation = (): string => {
        if (manuallyDismissed || isAnimating) {
            return `slide-out 0.3s ease-in-out forwards`;
        }
        return `slide-in 0.3s ease-in-out`;
    }

    const handleManualDismiss = () => {
        setManuallyDismissed(true);
        setTimeout(() => {
            handleDismiss();
        }, 500)
    }

    return (
        <div className={`bp-notification ${type ? type : 'info'}`} style={{ animation: setAnimation() }}>
            <Icon type="none" size="sm" dense icon={iconClass(type)} />
            <div className='bp-notification-text'>{message}</div>
            <Icon onClick={handleManualDismiss} size="xs" icon='bi bi-x-lg' />
        </div>
    )
}

export default Notification;