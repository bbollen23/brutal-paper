import React, { useState } from 'react';
import './Tabs.scss'
export interface TabsProps {
    tabData: TabInfo[];
    defaultIndex?: number;
    selectedIndex?: number;
}

export interface TabInfo {
    label: string;
    content: React.ReactNode
    defaultIndex?: number
}

const Tabs = ({ tabData, defaultIndex }: TabsProps): JSX.Element => {

    const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex ?? 0);

    const tabHeaders = tabData.map((entry, idx) => {
        const className = idx === selectedIndex ? 'bp-tab active' : 'bp-tab'
        return (
            <div className={className} onClick={() => setSelectedIndex(idx)}>{entry.label}</div>
        )
    })

    const tabContent = (<div className='bp-tabs-content'>{tabData[selectedIndex].content}</div>);

    return (
        <div className='bp-tabs-container'>
            <div className="bp-tabs-header">
                {tabHeaders}
            </div>
            {tabContent}
        </div>
    )
}

export default Tabs;