import React, { createContext, useContext } from 'react';

interface DrawerContextType {
    closeDrawer: () => void
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

export const DrawerProvider: React.FC<{ closeDrawer: () => void; children: React.ReactNode }> = ({ children, closeDrawer }) => {
    return (
        <DrawerContext.Provider value={{ closeDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};