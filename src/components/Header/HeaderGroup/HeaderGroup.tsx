import React from 'react';


interface HeaderGroupProps {
    alignment?: 'left' | 'right';
    dense?: boolean;
    children?: React.ReactNode;
}

const HeaderGroup = ({ dense, alignment, children }: HeaderGroupProps): JSX.Element => {
    const classAlignment = alignment ? alignment : 'left';
    const classDense = dense ? dense : false;
    return (
        <div className={
            `bp-header-group flex-row align-center 
            ${classAlignment === 'left' ? 'self-start' : 'self-end'} ${classDense ? 'gap-10' : 'gap-30'}`
        }>
            {children}
        </div>
    )
}

export default HeaderGroup;