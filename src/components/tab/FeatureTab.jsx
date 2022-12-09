import React, {Fragment} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabContent = [
    {
        name: 'Speech',
        desc: `Save web pages (without the ads) and mark them up with arrows, highlights, and text.`,
        list: [
            'Various analysis options.',
            'Page Load (time, size, number of requests).',
            'Big data analysis.',
        ]
    }, 
    {
        name: 'Auto Text',
        desc: `Save web pages (without the ads) and mark them up with arrows, highlights, and text.`,
        list: [
            'Page Load (time, size, number of requests).',
            'Various analysis options.',
            'Big data analysis.',
        ]
    }, 
    {
        name: 'Q&A',
        desc: `Save web pages (without the ads) and mark them up with arrows, highlights, and text.`,
        list: [
            'Various analysis options.',
            'Page Load (time, size, number of requests).',
            'Big data analysis.',
        ]
    }, 
    {
        name: 'Generate Leads',
        desc: `Save web pages (without the ads) and mark them up with arrows, highlights, and text.`,
        list: [
            'Page Load (time, size, number of requests).',
            'Various analysis options.',
            'Big data analysis.',
        ]
    }
];

const FeatureTab = () => {
    return (
        <Fragment>
            <Tabs>
                <TabList className="nav nav-tabs justify-content-between">
                    {TabContent.map((val, i)=>(
                        <Tab key={i} className="nav-item">
                            <button className="nav-link">{val.name}</button>
                        </Tab>
                    ))}
                </TabList>

                {TabContent.map((val, i) => (
                    <TabPanel key={i} className="tab-content">
                        <div className="tab-pane fade active show" id="sp1">
                            <p className="pt-10 pb-10">{val.desc}</p>
                            <ul className="style-none list-item">
                                {val.list.map((list, i)=>(
                                    <li key={i}>{list}</li>
                                ))}
                            </ul>
                        </div>
                    </TabPanel>
                ))}

            </Tabs>
        </Fragment>
    )
}

export default FeatureTab