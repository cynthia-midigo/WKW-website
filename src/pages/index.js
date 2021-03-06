import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from '../components/InfoSection/Data';
import Activities from '../components/Activities';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen);
    }


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        <Activities/>
        <Footer />
    

        </>
    );
};

export default Home
