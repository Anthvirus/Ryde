import  { useState } from "react";
import Input from "./Input";
import {Link} from "react-router-dom";

function SignInForm(){ 
    const [isValid, setValidity] = useState(true)
    const [input, updateInput] = useState({
        email: "",
        password:""
    })

    const password ="Me5#5nhg";
    const email = "maduneme002@gmail.com"
    
    function handleInput(event){
        const {name, value} = event.target;

        updateInput((prevValue)=> {return {
            ...prevValue,
            [name]: value
        }});
    }
    
    function submit(event){
        event.preventDefault()
        if(input.email !== email || input.password !== password){
            setValidity(false)
        }else if(input.email === email && input.password === password){
            setValidity(true)
        }
    }
    return (
    <form className="flex flex-col gap-6 py-12 justify-evenly shadow-lg items-center px-3 lg:px-20 bg-slate-100 w-72 h-[24rem] sm:w-[21.25rem] lg:w-[31.25rem] m-auto">
        <p className="hidden text-xs text-red-500" style={{display : isValid ? "none" : "flex"}}>Wrong Username or Password</p>
        <div>
            <Input type="text" required name="email" className="h-12 pl-3 border-0 shadow-sm w-60 sm:w-72 lg:w-96 bg-slate-100" placeholder="E-mail" onChange={handleInput} value={input.email}/>
        </div>
        <div>
            <Input type="password" required name="password"  className="h-12 pl-3 border-0 shadow-sm w-60 sm:w-72 lg:w-96 bg-slate-100" placeholder="Password" onChange={handleInput} value={input.password}/>
        </div>
        <button type="submit" id="button" onClick={submit} className="w-64 h-12 mb-3 uppercase disabled:bg-yellow-100 bg-yellow-300 shadow-sm sm:w-80 xl:w-96 hover:bg-yellow-200 text-neutral-900">Log In</button>
        <Link to="/signup" className="mx-auto -mt-4 text-sm hover:text-neutral-600">New user? Create and account</Link>
    </form>
    )
}

export default SignInForm;