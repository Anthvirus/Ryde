import React, {useState} from "react";
import Input from "./Input";
import {Link} from "react-router-dom";

function SignUpForm(){
    const [emailIsValid, checkEmail] = useState(true);
    const [passwordsMatch, comparePassword] = useState(true);
    const [passwordIsValid, checkPassword] = useState(true)
    const [input, updateInput] = useState({
        email: "",
        password:"",
        passwordTwo:""
    })

    function handleInput(event){
        const {name, value} = event.target;

        updateInput((prevValue)=>{
            return {
                ...prevValue, [name]:value
            };
        });
    }
            
    var regxEmail = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+)([.])([a-z]+)(.[a-z]+)?$/;
    var regxPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
 
    function submit(event){
        event.preventDefault();
        if(regxEmail.test(input.email)){
            checkEmail(true);
        }else if(!regxEmail.test(input.email)){
            checkEmail(false);
        }

        if(regxPassword.test(input.password)){
            checkPassword(true);
        }else if(!regxPassword.test(input.password)){
            checkPassword(false);
        }

        if(input.passwordTwo !== input.password){
            comparePassword(false);
        }else{
            comparePassword(true);
        }

        console.log(document.getElementById("termsbox").value)
    }
    
    return (
    <form className="flex flex-col gap-6 md:gap-6 justify-center shadow-lg items-center py-12 md:py-8 bg-slate-100 h-[28.75rem] w-72 sm:w-[21.25rem] lg:w-[27.5rem] xl:w-[37.5rem] m-auto">
            <div>
                <Input type="email" className="w-64 h-12 pl-3 shadow-md sm:w-80 xl:w-96 bg-slate-100" placeholder="E-mail" name="email" onChange={handleInput} value={input.email}/>
                <p className="text-xs text-red-500" style={{display : emailIsValid ? "none" : "flex"}}>Wrong Email format</p>
            </div>
            <div>
                <Input type="password" className="w-64 h-12 pl-3 shadow-md sm:w-80 xl:w-96 bg-slate-100" placeholder="Password" name="password" onChange={handleInput} value={input.password}/>
                <p className="text-xs text-red-500 align-start" style={{display : passwordIsValid ? "none" : "flex"}}>Password must contain at least 1 capital, 1 small letters; <br /> 1 digit, 1 special character.</p>
            </div>
            <div>
                <Input type="password" className="w-64 h-12 pl-3 shadow-md sm:w-80 xl:w-96 bg-slate-100" placeholder="Confirm Password" name="passwordTwo" onChange={handleInput} value={input.passwordTwo}/>
                <p className="text-xs text-red-500 align-start" style={{display : passwordsMatch ? "none" : "flex"}}>Passwords don't match</p>
            </div>
        <span className="flex px-6">
            <input type="checkbox" id="termsbox" name="terms"/>
            <p className="ml-1 text-xs lg:text-sm">I have read and agreed to all the terms and conditions on Ryde.</p>
        </span>
        <button type="submit" id="button" onClick={submit} className="w-64 h-12 mx-auto uppercase bg-yellow-300 shadow-sm sm:w-80 xl:w-96 hover:bg-yellow-200 text-neutral-900">Proceed</button>
        <Link to="/signin" className="mx-auto -mt-3 text-sm hover:text-neutral-600">Already have an account? Log In</Link>
    </form>
    )
}

export default SignUpForm;