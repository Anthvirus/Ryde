import React from "react";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignUp(){
    return (
        <section className="border-box">
            <Header signInButtonStyle={{display: "none"}} signUpButtonStyle={{display: "none"}}/>
            <section className="relative flex items-center min-h-[10rem] h-[48.75rem] md:h-[76.5rem] md:min-h-[35rem] lg:h-[34.05rem] lg:min-h-[34rem] xl:h-[38.75rem] xl:min-h-[37.5rem] bg-neutral-600 top-20 bottom-16">
                <SignUpForm/>
            </section>
            <Footer/>
        </section>
    )
}

export default SignUp;