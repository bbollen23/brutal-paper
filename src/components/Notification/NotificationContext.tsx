import React, { createContext, useContext, useCallback, useRef } from 'react';
import './Notification.scss'

interface NotificationContextType {
    notify: ({ message, type }: NotificationType) => void;
    setNotifyRef: (ref: NotifyFunction) => void;
}

type NotifyFunction = ({ message, type }: NotificationType) => void;

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

    // Initialized base notification function to be passed as ref
    const notifyRef = useRef<NotifyFunction | null>(null);

    const notify = useCallback(({ message, type }: NotificationType) => {
        if (notifyRef.current) {
            notifyRef.current({ message, type })
        }
    }, [])

    return (
        <NotificationContext.Provider value={{ notify, setNotifyRef: (ref) => { notifyRef.current = ref; } }}>
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
