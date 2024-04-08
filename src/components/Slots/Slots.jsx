import React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// //styles
import "./Slots.css";
//components
import TabPanel from '../TabPanel/TabPanel';



const Slots = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
            },
            }}
        >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />npm install --save react-swipeable-views
        </Tabs>
        <div>
            <TabPanel value={value} index={0} >
            Item One
            </TabPanel>
            <TabPanel value={value} index={1} >
            Item Two
            </TabPanel>
            <TabPanel value={value} index={2} >
            Item Three
            </TabPanel>
            <TabPanel value={value} index={3} >
            Item Four
            </TabPanel>
            <TabPanel value={value} index={4} >
            Item Five
            </TabPanel>
            <TabPanel value={value} index={5} >
            Item Six
            </TabPanel>
            <TabPanel value={value} index={6} >
            Item Seven
            </TabPanel>
        </div>
        </>
    );
}


export default Slots;