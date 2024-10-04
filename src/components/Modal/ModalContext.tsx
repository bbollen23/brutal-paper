import React, { createContext, useContext } from 'react';

interface ModalContextType {
    closeModal: () => void
}

// Create a context
const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;

};

export const ModalProvider: React.FC<{ closeModal: () => void; children: React.ReactNode }> = ({ children, closeModal }) => {
    return (
        <ModalContext.Provider value={{ closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};