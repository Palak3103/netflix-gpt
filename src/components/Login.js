import { useState } from "react";
import Header from "./Header";

const Login = () => {
const[isSignIn, setIsSignIn]=useState(true)
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn )
    }

    const handleButtonClick=()=>{
         
    }
  return (
    <div >
      <Header />
      <div className="absolute h-4/6">
        <img
        // className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-5/12 absolute  px-10 py-3 bg-black my-20  mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-2 ">{isSignIn? 'Sign In' : 'Sign Up'}</h1>
        
        {!isSignIn && <input 
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-2 w-full bg-gray-700" />}
        <input 
        type="text" 
        placeholder="email" 
        className="p-4 my-2 w-full bg-gray-700" />
       
        <input 
        type="password" 
        placeholder="Password" 
        className="p-4 my-2 w-full bg-gray-700" />
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full" >{isSignIn? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer ' onClick={toggleSignIn}>{isSignIn? 'New to Netflix? Sign up now' : 'Already registered? Sign In...'}</p>
      </form>
    </div>
  );
};
export default Login;
