import React, { useState } from 'react';
import './Button.scss';


export interface SwitchGroupProps {
    labelList: string[];
    toggle?: boolean;
    onChange: (labelClickedState: boolean[]) => void;
    clickState: boolean[];
    setClickState: (value: boolean[]) => void;
}


const SwitchGroup = ({ labelList, toggle, onChange, clickState, setClickState }: SwitchGroupProps): JSX.Element => {

    // const [clickedState, setClickedState] = useState<boolean[]>(defaultState ?? labelList.map(entry => false) ?? [])

    const handleOnClick = (index: number) => {


        const updatedState = [...clickState]

        if (toggle) {
            updatedState.fill(false);
            updatedState[index] = !clickState[index];
        } else {
            updatedState[index] = !clickState[index];
        }

        setClickState(updatedState)

        if (onChange) {
            onChange(updatedState);
        }

        return updatedState
    }

    return (
        <div className='bp-switch-group-container'>
            {labelList.map((label: string, idx: number) => <div key={label} onClick={() => handleOnClick(idx)} className={`bp-btn-container ${clickState[idx] ? 'clicked' : ''}`}>
                <div className='bp-btn'>{label}</div>
                <div className='bp-btn-shadow'></div>
            </div>)}
        </div>
    )
}


export default SwitchGroup;