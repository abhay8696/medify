import React from 'react';
//styles
import "./Families.css";
//components
import CommonSuperText from '../CommonSuperText/CommonSuperText';
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSubText from '../CommonSubText/CommonSubText';

const superText = "CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.";
const header = "Our Families";
const subText = "We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.";


const Families = () => {
    return (
        <div className='Families'>
            <CommonSuperText text={superText} transform="uppercase" />
            <CommonHeader text={header} />
            <CommonSubText text={subText} />
        </div>
    );
};

export default Families;