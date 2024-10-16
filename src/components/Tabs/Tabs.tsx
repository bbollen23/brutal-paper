import React, { useState } from 'react';
import './Tabs.scss'

export interface TabsProps {
    tabData: TabData[];
    defaultIndex?: number;
    selectedIndex?: number;
    flat?: boolean;
}

export interface TabData {
    label: string;
    content: React.ReactNode
    defaultIndex?: number
}

export const Tabs = ({ flat, tabData, defaultIndex }: TabsProps): JSX.Element => {

    const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex ?? 0);

    const tabHeaders = tabData.map((entry, idx) => {
        const className = idx === selectedIndex ? 'bp-tab active' : 'bp-tab'
        return (
            <div className={className} onClick={() => setSelectedIndex(idx)}>{entry.label}</div>
        )
    })

    const tabContent = (<div className=' flat bp-tabs-content'>{tabData[selectedIndex].content}</div>);


    return (
        <div className='bp-tabs-container'>
            <div className="bp-tabs-header">
                {tabHeaders}
            </div>
            {tabContent}
        </div>
    )
}

