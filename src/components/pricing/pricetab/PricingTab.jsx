import React, {Fragment} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MonthlyPrice from './MonthlyPrice';
const PricingTab = () => {
    return (
        <Fragment>
            <div className='container'>
                <Tabs >
                    <TabPanel className="tab-pane active show">
                        <MonthlyPrice/>
                    </TabPanel>
                </Tabs>
            </div>

        </Fragment>
    )
}

export default PricingTab