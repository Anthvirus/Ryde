import React, {useState} from 'react';
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

function Header(props){
    const[isVisible, toggleNavVisible] = useState(false);

    function toggleNav(){
        toggleNavVisible(prevValue => {
            return !prevValue;
        });
    }

    function openSignUp(){
        window.location.href = '/signup';
    }

    function openSignIn(){
        window.location.href = '/signin';
    }

    return (
        <header className='fixed z-10 flex items-center justify-between w-full h-20 pl-0 bg-neutral-800 lg:pl-4'>
            <div className='flex'>
                <img onClick={toggleNav} className='p-2 mx-1 rounded-lg w-11 h-9 lg:mx-3 lg:hidden hover:cursor-pointer bg-neutral-600' src="./icons/Menubar.png" style={{border : isVisible ? "2px solid black" : "none"}} alt="menus icon" />
                <h1 className='text-2xl font-bold text-yellow-300 sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Ryde.</h1>
            </div>
            <div className='flex items-center justify-between h-full'>
                <NavbarMobile className="lg:hidden" style={{display: isVisible ? "flex" : "none"}}/>
                <NavbarDesktop />
                <button onClick={openSignIn} className='w-24 h-full text-sm uppercase lg:w-36 hover:bg-neutral-900 bg-neutral-600 text-slate-100' style={props.signInButtonStyle}>Sign In</button>
                <button onClick={openSignUp} className='w-24 h-full text-sm uppercase bg-yellow-300 lg:w-36 hover:bg-yellow-200 text-neutral-900' style={props.signUpButtonStyle}>Create Account</button>
            </div>
        </header>
    );
}

export default Header;