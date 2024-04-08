import React from 'react';
//styles
import "./TabPanel.css"
import Button from '../Button/Button';

const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"]
const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"]
const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"]

const SlotSession = props => {
  //props
  const { type, timings, suffix } = props;
  //functions
  const displayButtons = () => {
    return timings.map(item => {
      return <Button text={`${item} ${suffix}`} buttonClass={"smallButton blueButton-outline"}/>
    })
  }
  return (
    <div className='slotSession'>
      <span className='sessionType'>{type}</span>
      <span className='timeButtonsArray'>{displayButtons()}</span>
    </div>
  )
}

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
        className='TabPanel'
      >
        {value === index && (
          <>
            <SlotSession type="Morining" timings = {morningTimings} suffix="AM"/>
            <span className='slotDivider'></span>
            <SlotSession type="Afternoon" timings = {afternoonTimings} suffix="PM"/>
            <span className='slotDivider'></span>
            <SlotSession type="Evening" timings = {eveningTimings} suffix="PM"/>
          </>
        )}
      </div>
    );
};

export default TabPanel;