import React, { useState } from "react";
import { logo } from "../assets/index.js";
import { Helmet } from "react-helmet";
import {login,signup} from '../firebase.js'  
import { useNavigate} from "react-router-dom";
import {Img,Text} from "../components/index.js";

function Login() {
  const [signState, setSignState] = useState("Sign Up");
  const [name,setName]=useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading] = useState(false)
  
  const user_auth = async(event) =>{
    event.preventDefault()
    setLoading(true)
    if(signState === "Sign Up"){
      console.log("login")
      await login(email,password)
     
    
    }else{
     
      console.log("register")
      await signup(name,email,password)
     
    }

   setLoading(false)
  }

 
  return (
    <>
      <Helmet>
        <title>Stop 'N Shop - {signState == "Sign Up"  ? "Sign In" : "Sign Up"}</title>
        <meta name="description" content={``}></meta>
      </Helmet>
    {loading ? (
            <div className="flex h-screen  w-full justify-center items-center">
              <div
                className="inline-block h-[60px] w-[60px] text-gray-800 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </div>
          ): (
      <>
         <div className="w-full px-[50px] py-[25px] fixed">
      
        <Img
          src={logo}
          alt="header logo"
          className="h-[50px] w-[50px] object-contain"
          imgText={
            <Text
              size="s"
              className="!font-bold  !text-gray-800 underline underline-offset-4 italic
          "
            >
              Stop 'N Shop
            </Text>
          }
        ></Img>
       
      </div>

      <div className="h-screen w-full items-center flex">
        <div className="w-full h-screen justify-start">
        <div className="h-[100vh] px-[20%] py-[8%] sm:px-[10%] xs:px-[5%] xs:py-[2%] sm:py-[4%]  items-center justify-center ">
        <div className="flex flex-col  w-[100%] max-w-[450px] sm:max-w-[400px] rounded-lg p-[64px] sm:p-[48px] xs:p-[32px]">
          <Text as="h1" className="text-gray-800 text-[32px] sm:text-[24px] xs:text-[20px]  font-semibold mb-[28px] sm:mb-[14px] xs:mb-[12px] ">
            {signState == "Sign In" ? "Sign Up" : "Sign In"}
          </Text>

          <form className="flex flex-col gap-[25px] sm:gap-[10px]">
            {signState == "Sign In" ? (
              <input
                className="bg-black-900_0c placeholder:text-black-900_68 placeholder:text-[16px] sm:placeholder:text-[14px]  xs:placeholder:text-[12px] sm:text-[14px] xs:text-[12px] sm:p-[14px]  xs:p-[12px] text-[16px]  w-[100%] h-[50px]  text-white border-0 outline-0 rounded-lg p-[16px]"
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
            ) : (
              ""
            )}
            <input
              className=" placeholder:text-[16px] placeholder:text-black-900_68 sm:placeholder:text-[14px] xs:placeholder:text-[12px] sm:text-[14px] sm:p-[14px] xs:text-[12px] text-[16px] xs:p-[12px] w-[100%] h-[50px] bg-black-900_0c text-white border-0 outline-0 rounded-lg p-[16px]"
              type="email"
              placeholder="Email"
              onChange={(e) =>setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className=" placeholder:text-[16px] placeholder:text-black-900_68 text-[16px] sm:placeholder:text-[14px] xs:placeholder:text-[12px] sm:text-[14px] xs:text-[12px] sm:p-[14px] xs:p-[12px] w-[100%] h-[50px] bg-black-900_0c text-white border-0 outline-0 rounded-lg p-[16px]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <Button type="submit" onClick={user_auth} className="mt-[20px] sm:mt-[10px] xs:mt-[5px] cursor-pointer w-[100%] border-0 outline-0 p-[16px] sm:p-[14px] xs:p-[12px] bg-gray-800 hover:bg-gray-950 text-white-A700 rounded-lg text-[16px] ">
              {signState == "Sign In" ? "Sign Up" : "Sign In"}
            </Button>
            <div className="flex items-cener justify-between text-[13px]">
              <div className="flex items-center gap-[5px]">
                <input className=" w-[18px] h-[18px] sm:w-[14px] xs:w-[12px] sm:h-[14px] xs:h-[12px]" type="checkbox"></input>
                <label htmlFor="" className="text-black-900_68 hover:text-gray-800">Remember Me</label>
              </div>
              <Text as="p" className="cursor-pointer text-black-900_68 hover:text-gray-800">Need Help?</Text>
            </div>
          </form>
          <div className="mt-[40px] sm:mt-[30px] xs:mt-[20px]  ">
            {signState  == "Sign In"? (
            
              <Text as="p" className="sm:text-[14px] xs:text-[12px] text-black-900_68">
                Don't have an account?{" "} 
                <span
                  className="ml-[6px] text-gray-800 hover:text-gray-500 font-semibold cursor-pointer"
                  onClick={() =>{ setSignState("Sign Up")
                    console.log(signState)
                  }}
                > 
               Sign Up
                </span>
                </Text> 
          
               
             
            ) : (
              <Text as="p" className="sm:text-[14px] xs:text-[12px] text-black-900_68">
                Already have a account?{" "}
                <span
                  className=" ml-[6px] text-gray-800 hover:text-gray-500 font-semibold cursor-pointer"
                  onClick={() => {setSignState("Sign In")
                    console.log(signState)
                  }}
                >
                  Sign In
                </span>
              </Text >
            )}{" "}
          </div>
          
        </div>
      </div>

            
        </div>
        <div className="w-full h-screen  background-login "></div>
      </div>
      </>)}
    </>
  );
}

export default Login;
