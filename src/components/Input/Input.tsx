import React, { useState, useRef, useEffect } from 'react';
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

    const [inputWidth, setInputWidth] = useState<string>('auto');
    const [errorFontSize, setErrorFontSize] = useState<string>('1rem')

    const inputRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLInputElement>(null);

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

    useEffect(() => {
        if (inputRef.current) {
            // Get computed width of the input element
            const computedStyles = window.getComputedStyle(inputRef.current);
            const width = computedStyles.getPropertyValue('width');
            setInputWidth(width);  // Store the computed width

            const containerWidth = parseFloat(width);
            setErrorFontSize(containerWidth > 300 ? '1rem' : '0.8rem');

        }

    }, []);  // Runs once after the component mounts



    useEffect(() => {
        if (errorMessage && errorRef.current) {

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (context) {
                context.font = '1rem Arial';
                const width = context.measureText(errorMessage).width;
                const inputWidthNumber = parseFloat(inputWidth);

                if (width > inputWidthNumber) {
                    const newFontSize = (inputWidthNumber / width) * 0.6;
                    setErrorFontSize(`${Math.max(newFontSize, 0.7)}rem`);
                } else {
                    setErrorFontSize('1rem');
                }
            }


            errorRef.current.style.width = inputWidth;
        }
    }, [errorMessage, inputWidth]);

    return (
        <div className='bp-input-container'>
            <div className='bp-label'>{label}</div>
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={`bp-input ${!valid ? `invalid` : null}`}
                value={value}
                onChange={handleOnChange}
                type={type}
            />
            <div ref={errorRef} className='bp-invalid-container'>
                {!valid ? <Icon icon='bi bi-exclamation-octagon' size="xs" /> : null}
                <div style={{ fontSize: errorFontSize }}>{!valid ? errorMessage : null}</div>
            </div>
        </div>
    )
}

export default Input;