import React, { useState } from 'react';
import './Button.scss';


export interface SwitchGroupProps {
    labelList: string[];
    defaultState?: boolean[];
    toggle?: boolean;
    onClick?: (labelClickedState: boolean[]) => void;
}


const SwitchGroup = ({ labelList, toggle, onClick, defaultState }: SwitchGroupProps): JSX.Element => {

    const [clickedState, setClickedState] = useState<boolean[]>(defaultState ?? labelList.map(entry => false) ?? [])

    const handleOnClick = (index: number) => {

        setClickedState((prev) => {

            const updatedState = [...prev]

            if (toggle) {
                updatedState.fill(false);
                updatedState[index] = !prev[index];
            } else {
                updatedState[index] = !prev[index];
            }

            if (onClick) {
                onClick(updatedState);
            }

            return updatedState
        })
    }

    return (
        <div className='bp-switch-group-container'>
            {labelList.map((label: string, idx: number) => <div key={label} onClick={() => handleOnClick(idx)} className={`bp-btn-container ${clickedState[idx] ? 'clicked' : ''}`}>
                <div className='bp-btn'>{label}</div>
                <div className='bp-btn-shadow'></div>
            </div>)}
        </div>
    )
}


export default SwitchGroup;