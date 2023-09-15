import React from 'react';
import Header from "../components/Header";
import LandingPageBody from "../components/LandingPageBody";
import Footer from "../components/Footer";

function LandingPage(){
    return (
        <section className='box-border'>
            <Header/>
            <LandingPageBody/>
            <Footer/>
        </section>
    );
}

export default LandingPage;