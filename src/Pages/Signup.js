import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
const Signup = () => {

    const history=useNavigate();
    const [user,setuUser]=useState({
      name:"",
      phone:"",
      password:"",
      cpassword:""
    });
  
      const handleInputs=(e)=>{
       console.log(e.target.value);
        const {name,value}=e.target;
        setuUser((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      };
  
      const PostData=async(e)=>{
        e.preventDefault();
  
        const {name,phone,password,cpassword}=user;
  
        if( !name || !phone || !password || !cpassword){
          window.alert("All fields are required")
        }
        else if(password !== cpassword){
          window.alert("Password and Confirm Password must be same");
        }
        else{
          const res=await fetch("/register",{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name,
              phone,
              password,
              cpassword
              })
          });
          const data =await res.json();
  
          if(data.status === 422 || !data){
            window.alert("Invalid registration");
            console.log("Invalid registration");
          }
          if (data.status===409){
            alert("Email already exists ")
          }
          else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
          }
        }
      }

  return (
    <>
<div class="wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your phone number" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div class="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
    
    </>
  )
}

export default Signup