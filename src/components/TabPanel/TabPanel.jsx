import React from 'react';
//styles
import "./TabPanel.css"
import Button from '../Button/Button';




const TabPanel = props => {
    //props
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Button text={"11:30 AM"} buttonClass={"smallButton transperantBlueButton"}/>
        )}
      </div>
    );
};

export default TabPanel;