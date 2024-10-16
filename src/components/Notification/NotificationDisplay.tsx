import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import { NotificationTypeTimed, useNotification, NotificationType } from './NotificationContext';



const NotificationDisplay: React.FC = () => {
    const { setNotifyRef } = useNotification();
    const [notifications, setNotifications] = useState<NotificationTypeTimed[]>([])

    // Removes notification
    const dismissNotification = (timestampStart: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((n) => n.timestampStart !== timestampStart)
        );
    };

    useEffect(() => {
        setNotifyRef(notify)
    }, [setNotifyRef])

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

    return (
        <div className="bp-notification-container">
            {notifications.map((notification: NotificationTypeTimed) => (
                <Notification
                    key={`notification-${notification.timestampStart}`}
                    type={notification.type}
                    message={notification.message}
                    dismissTime={notification.dismissTime}
                    handleDismiss={() => dismissNotification(notification.timestampStart)}
                />
            ))}
        </div>
    );
};

export default NotificationDisplay;