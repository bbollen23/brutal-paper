import React from 'react';
import './Divider.scss';

export interface DividerProps {

}

const Divider = ({ }: DividerProps): JSX.Element => {
    return (
        <div className='bp-divider'></div>
    )
}

export default Divider;