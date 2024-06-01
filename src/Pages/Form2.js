import React, { useState } from 'react'
import signupimg from '../assests/login.jpg'
import { useNavigate } from 'react-router-dom';
import './Form2.js'

const Form2 = () => {
  const [phone,setPhone]=useState('');
  const [password, setPassword] = useState('');

  const loginUser= async(e)=>{
    e.preventDefault();

    if (!phone || !password){
      window.alert("Please full all the fields")
    }
    else{
      const res=await fetch('/signin',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify({
            phone, password
            })
      });
  
      const data=res.json();
  
      if(res.status===400 || !data){
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials")
      }
      else if(res.status===401){
        window.alert("Invalid Password ");
        console.log("Invalid Password")
      }
      else{
        window.alert("Login Successfull");
        localStorage.setItem("loginemail",phone);
        console.log("Login Successfull")      }
    }
  }

  return (
    <>
    <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="phone"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="phone"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    </>
  )
}

export default Form2