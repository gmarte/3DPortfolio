import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link className='neo-brutalism-white neo-btn' to={link}>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Giancarlo </span>
            <br />
            a skilled Web Developer from the Dominican Republic.
        </h1>
    ),    
    2: (
        <InfoBox
            text="Bringing over a decade of experience in web development, specializing in creating dynamic, user-centric solutions"
            link="/about"
            btnText="learn more"
         />
    ),
    3: (
        <InfoBox
            text="Led diverse web projects, integrating advanced technologies and innovative approaches for national and international clients"
            link="/projects"
            btnText="Visit my portfolio"
         />
    ),
    4: (
        <InfoBox
            text="If you need a visionary web developer for your next project, I'm ready to bring your digital aspirations to life"
            link="/contact"
            btnText="Let's talk"
         />
    ),
}

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo
