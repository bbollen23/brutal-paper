import React, { useState, useRef, useEffect } from 'react';
import './Input.scss';
import { Icon } from '../Icon';
import ReactDom from 'react-dom';

export interface SelectProps {
    label: string;
    placeholder?: string;
    onSelect?: (value: string) => void;
    selectList: string[];
    defaultIndex?: number;
}
export interface Position {
    left: number;
    top: number;
    width: number;
}

const Select = ({ defaultIndex, selectList, label, placeholder, onSelect }: SelectProps): JSX.Element => {

    const [value, setValue] = useState<string>('');
    const [selectOpen, setSelectOpen] = useState<boolean>(false);
    const [filteredSelectList, setFilteredSelectList] = useState<string[]>(selectList ?? []);
    const [position, setPosition] = React.useState<Position>({ left: 0, top: 0, width: 0 })

    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef(value);


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);

        if (selectList) {
            setFilteredSelectList(selectList.filter((entry: string) => entry.toLowerCase().includes(inputValue.toLowerCase())))
        }
    };

    const handleSelectClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!selectOpen) {
            const targetElement = event.currentTarget;
            const parentElement = targetElement.parentElement; // Get the parent element
            const parentRect = parentElement?.getBoundingClientRect();

            if (parentRect) {
                let positionLeft = parentRect.left;
                let positionTop = parentRect.top + 48;

                setPosition({
                    left: positionLeft,
                    top: positionTop,
                    width: parentRect.width - 2
                });
                setSelectOpen(true);
            }
        } else {
            setSelectOpen(false);
        }
    }

    const handleSelectItemClick = (entry: string) => {
        if (onSelect) {
            if (entry !== value) {
                onSelect(entry);
            }
        }
        setValue(entry);
        setSelectOpen(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            inputRef.current &&
            !inputRef.current.contains(event.target as Node)
        ) {
            if (!(selectList.includes(valueRef.current))) {
                if (defaultIndex) {
                    setValue(selectList[defaultIndex])
                } else {
                    setValue(selectList[0])
                }
            }
            setSelectOpen(false); // Close the dropdown if clicked outside
        }
    };

    const handleFocus = () => {
        setFilteredSelectList(selectList)
    }

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    useEffect(() => {
        if (selectOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectOpen]);

    useEffect(() => {
        if (defaultIndex !== undefined) {
            try {
                setValue(selectList[defaultIndex])
            } catch (error) {
                throw new Error('Default index out of range of selectList.')
            }
        }
    }, [])

    return (
        <div className='bp-input-container'>
            <div className='bp-label'>{label}</div>
            <div className={`bp-input-wrapper`}>
                <input
                    ref={inputRef}
                    placeholder={placeholder}
                    value={value}
                    className={'bp-input'}
                    onChange={handleOnChange}
                    onFocus={handleFocus}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSelectClick(e)}
                />
                <Icon icon='bi bi-chevron-expand' size='sm' onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSelectClick(e)} />
            </div>
            {selectOpen &&
                ReactDom.createPortal(
                    <div ref={dropdownRef} className="bp-dropdown-menu" style={{ top: `${position.top}px`, left: `${position.left}px`, width: `${position.width}px` }}>
                        {filteredSelectList.length > 0 ? filteredSelectList?.map((entry: string) => {
                            return (
                                <div onClick={() => handleSelectItemClick(entry)} className='bp-dropdown-item-container'>
                                    <div className='bp-dropdown-item'>{entry}</div>
                                </div>
                            )
                        }) : <div className='bp-dropdown-item-nothing'>No items found.</div>}
                    </div>, document.body
                )}
        </div>
    )
}

export default Select;