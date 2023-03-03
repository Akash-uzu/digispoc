import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error,setError] = useState("")
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  const navigate = useNavigate()

  const submitHandler=()=>{
    if(email && password !== ""){
        if(emailRegex.test(email) && passwordRegex.test(password)){
            navigate("/home")
            
        }else{
          setError("Enter valid credentials")
        }
      }else{
        setError("Input Should not be empty")
      }  
  }

  return (
    <div>
      <label htmlFor="email"> Email</label>
      <input type="email" onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" onChange={(event)=> setPassword(event.target.value)} />
      {error && <p style={{color:"red"}}>{error}</p>}
       <button onClick={submitHandler}>Submit</button>     
    </div>
  );
};

export default Login;
