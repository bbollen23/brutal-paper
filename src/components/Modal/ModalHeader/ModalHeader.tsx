import React from 'react';
import { useModal } from '../ModalContext';
import Icon from '../../Icon';


interface ModalHeaderProps {
    style?: React.CSSProperties;
    closeButton: boolean;
    title?: string
}


const ModalHeader = ({ style, closeButton, title }: ModalHeaderProps): JSX.Element => {
    const { closeModal } = useModal();
    return (
        <div style={style} className='bp-modal-header'>
            <div className='bp-modal-title'>{title}</div>
            {closeButton ? <Icon onClick={closeModal} icon="bi bi-x-lg" size='sm' /> : null}
        </div>
    )
}

export default ModalHeader;