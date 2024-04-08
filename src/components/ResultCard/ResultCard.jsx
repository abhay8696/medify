import React from 'react';
//styles
import "./ResultCard.css";
//assets
import hospitalImg from "../../assets/hospitalCircle.svg";
import likeIcon from "../../assets/like.svg";
//components
import Button from '../Button/Button';

const resultCardHead = "Fortis Hospital Richmond Road";
const resultLocation = "Banglore, Karnataka";
const resultCardSubtext = "Smilessence Center for Advanced Dentistry + 1";
const resultCardOffer = "Consultation fee at clinic";
const ResultCard = () => {
    return (
        <div className='ResultCard'>
            <div className='resultCardImageWrapper'>
                <img src={hospitalImg} alt="hospital icon" />
            </div>
            <div className='resultCardTexts'>
                <h6 className='resultCardTitle'>{resultCardHead}</h6>
                <div className='resultLocation'>
                    <span className='resultCity'>{resultLocation}</span>
                    <span className='resultCardSubtext'>{resultCardSubtext}</span>
                    <span className='resultCardSubtext'>more</span>
                </div>
                <div className='resultCardOfferLine'>
                    <span className='FREE'>FREE</span>
                    <span className='strikeThrough'>₹500</span>
                    <span>{resultCardOffer}</span>
                </div>
                <Button buttonClass={"smallButton greenButton"} text={5} icon={likeIcon} />
            </div>
            <div className='resultCardButton'>
                <span className='available'>Available Today</span>
                <Button buttonClass={"longButton"} text={"Book FREE Center Visit"}/>
            </div>
        </div>
    );
};

export default ResultCard;