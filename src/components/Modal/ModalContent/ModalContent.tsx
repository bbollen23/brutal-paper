import React from 'react';

interface ModalContentProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const ModalContent = ({ children, style }: ModalContentProps): JSX.Element => {
    return (
        <div style={style} className='bp-modal-content'>
            {children}
        </div>
    )
}

export default ModalContent;