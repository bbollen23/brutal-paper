import React, { useState, useEffect } from 'react';
import './Modal.scss'
import { ModalProvider } from './ModalContext';

interface ModalProps {
    children?: React.ReactNode
    opened: boolean;
    setOpened?: (isOpen: boolean) => void;
    closeOnOutside?: boolean;
    actions?: React.ReactNode;
    style?: React.CSSProperties;
    onClose?: () => void;

}


const Modal = ({ onClose, children, opened, closeOnOutside, setOpened, actions, style }: ModalProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(opened ?? false);

    useEffect(() => {
        setIsOpen(opened ?? false);

    }, [opened])

    const closeModal = () => {
        setIsOpen(opened ?? false);
        if (setOpened) {
            setOpened(false);
        }
        if (onClose) {
            onClose();
        }
    }

    const handleClickOutside = () => {
        if (closeOnOutside) {
            closeModal();
        }
    }


    return (
        <ModalProvider closeModal={closeModal}>
            <div
                onClick={handleClickOutside}
                className={`bp-modal-backdrop ${isOpen ? 'open' : 'closed'}`}
            >
                <div
                    className='bp-modal-container' style={style} onClick={(e) => e.stopPropagation()}
                >
                    {children}
                    <div className="bp-modal-actions">
                        {actions ? actions : null}
                    </div>
                </div>
            </div>
        </ModalProvider>
    )
}

export default Modal