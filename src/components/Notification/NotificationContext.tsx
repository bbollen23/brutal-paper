import React, { createContext, useState, useContext, useEffect } from 'react';
import './Notification.scss'
import Notification from './Notification';

interface NotificationContextType {
    notify: ({ message, type }: NotificationType) => void;
}

interface NotificationProviderProps {
    children: React.ReactNode;
}

export interface NotificationType {
    message: string,
    type?: 'success' | 'alert' | 'warning' | 'info';
    dismissTime?: number
}

export interface NotificationTypeTimed extends NotificationType {
    timestampStart: number;
}

const NotificationContext = createContext<NotificationContextType | null>(null);


export const NotificationProvider = ({ children }: NotificationProviderProps): JSX.Element => {
    const [notifications, setNotifications] = useState<NotificationTypeTimed[]>([]);

    const notify = ({ message, dismissTime, type = 'info' }: NotificationType) => {
        let currDismissTime;

        // Get dismiss time based on type or passed in. If alert, no default.
        if (dismissTime) {
            currDismissTime = dismissTime;
        } else {
            if (type === 'info' || type === 'success' || type === 'warning') {
                currDismissTime = 3000;
            }
        }

        // Initialize Notification
        const notificationTimed: NotificationTypeTimed = {
            message,
            type,
            timestampStart: Date.now(),
            dismissTime: currDismissTime
        }

        setNotifications((prevNotifications) => [
            ...prevNotifications,
            notificationTimed
        ]);

    }

    // Removes notification
    const dismissNotification = (timestampStart: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((n) => n.timestampStart !== timestampStart)
        );
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {notifications.length !== 0 ?
                <div className="bp-notification-container">
                    {notifications.map((notification: NotificationTypeTimed) => {
                        return <Notification
                            key={`notification-${notification.timestampStart}`}
                            type={notification.type}
                            message={notification.message}
                            dismissTime={notification.dismissTime}
                            handleDismiss={() => dismissNotification(notification.timestampStart)}
                        />
                    })}
                </div>
                : null}
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);

    // Ensure that the context is used within a NotificationProvider
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }

    return context;
};
