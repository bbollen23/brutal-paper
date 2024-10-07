import React, { createContext, useContext } from 'react';

interface DrawerContextType {
    closeDrawer: () => void
}

interface DrawerProviderProps {
    children: React.ReactNode;
    closeDrawer: () => void;
}

// Create a context
const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;

};

export const DrawerProvider = ({ children, closeDrawer }: DrawerProviderProps): JSX.Element => {
    return (
        <DrawerContext.Provider value={{ closeDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};