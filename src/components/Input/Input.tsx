import React, { useState } from 'react';
import './Input.scss';
import Icon from '../Icon';

export interface InputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validator?: (value: string) => boolean;
    errorMessage?: string;
    type?: string;
}

const Input = ({ type, label, placeholder, value, onChange, errorMessage, validator }: InputProps): JSX.Element => {

    const [valid, setIsValid] = useState<boolean>(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (onChange) {
            onChange(event);
        }

        if (validator) {
            const valid = validator(inputValue);
            setIsValid(valid);
        }
    };



    return (
        <div className='bp-input-container'>
            <div className='bp-label'>{label}</div>
            <input
                placeholder={placeholder} className={`bp-input ${!valid ? `invalid` : null}`}
                value={value}
                onChange={handleOnChange}
                type={type}
            />
            <div className='bp-invalid-container'>
                {!valid ? <Icon icon='bi bi-exclamation-octagon' size="xs" /> : null}
                <span>{!valid ? errorMessage : null}</span>
            </div>
        </div>
    )
}

export default Input;