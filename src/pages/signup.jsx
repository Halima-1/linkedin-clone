import { useNavigate, Link } from "react-router-dom"
// import "../styles/landing.scss"

import React, { useState } from 'react'
function Signup() {
    const [formIndex,setFormIndex] =useState(0)
    const navigate =useNavigate()
const users =localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]
const [newUser,setNewUser] =useState({
    email:"",
    password:"",
    num:"",
    fname:"",
    lname:""
})
const [errData, setErrData] = useState({});
const newErr={}

const handleChange = (e) => {
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value }) 
 };
const nextBtn =()=>{
    if(newUser.email =="" || newUser.password ==""){
        newErr.err ="kindly input your email to sign up"
        setErrData(newErr);
    }
    else{
        setFormIndex(formIndex + 1)
        users.push(newUser) 
    }
}

// form validation
const handleValidation =()=>{
    if(newUser.fname ==''){
        newErr.fname ="kindly input your first name"
    }
    else if(newUser.lname == ''){
        newErr.lname ="kindly input your last name"
    }
    setErrData(newErr);
    users.push(newUser) 

}
const submit =()=>{
    handleValidation ()
    if(!errData){
        return;
    }
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const emailValidation = users.find((item) => item.email == newUser.email);
    if (emailValidation) {
      console.log("Email Already Exist");
      newErr.err ="Email already exist"
      return;
    }
    const lNameValidation = users.find((item) => item.lname == newUser.lname);
    const fNameValidation = users.find((item) => item.fname == newUser.fname);
    if (lNameValidation && fNameValidation) {
      console.log("user Already Exist");
      newErr.err ="user already exist"
      return;
    }

    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users))
    navigate("/login", { replace: true });

}
 // form content
let formContent;
if (formIndex ===0){
    formContent = <>
   <form action=""
        onSubmit={(event) => {
          event.preventDefault();
          nextBtn();
        }}>
   <h2>
    Stay up to date on your Industry .
</h2>
    <div>
        {errData.email && <span>{errData.email}</span>}
    <label htmlFor="email">Email or phone</label>
    <input type="text" required name="email"onChange={handleChange} value={newUser.email} placeholder='email or phone number'  />
    </div>
    <div>
    {errData.password && <span>{errData.password}</span>}
    <label htmlFor="password">password</label>
    <input type="text" required name="password"onChange={handleChange} value={newUser.password} placeholder='password' />
    </div>
    <input type="submit" onClick={nextBtn} className="btn" value={"Join now"} />
</form></>
}
else if(formIndex ===1){
    formContent =<>
     <form action=""
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}>
    <div>
    {errData.err && <span style={{color:"red"}}>{errData.err}</span>}
    {errData.fname && <span style={{color:"red"}}>{errData.fname}</span>}
    <label htmlFor="fname">First name</label>
    <input type="text" name="fname" value={newUser.fname} placeholder='First name' onChange={handleChange} />
    </div>
    <div>
    {errData.lname && <span style={{color:"red"}}>{errData.lname}</span>}
    <label htmlFor="lname">Last name</label>
    <input type="text" name="lname" value={newUser.lname} placeholder='last name' onChange={handleChange}/>
    </div>
    <input type="submit" value={"Continue"} className="btn" style={formIndex ===1? {display:"block"}:{display:"none"}}/>
</form></>
}

    return (
        <>

        {formContent}
        {formIndex ===0?  
            <div className='hero-text'>
            <p className='term'>By clicking continue to join, you agreed to <a href=""><b>LinkedIn's User Agreement,
                    </b></a> <a href=""><b>Privacy policy</b></a> and
                <a href=""><b>Cookie policy</b></a>
                </p>
              <input type="submit" className="agree" onClick={nextBtn} value={"Agree and join"} />
              <p className="or">or</p>
                <button className='google'>
                    <p>
                    <b>Continue as Halima</b> <br />
                    <span>dahunsiolajumoke18@gmail.com</span> 
                    </p>
                {/* <span className="google"> */}
                    <img src="../../src/assets/google logo.png" alt="google logo" />
                    {/* </span>  */}
                   
                </button>
                <button className='microsoft'>
                    <img src="../../src/assets/microsoft.png" alt="google logo" />
                    <b>Continue with microsoft</b>
                </button>
                 <p className='term'>Already on LinkedIn? <Link to={"/login"}><b>Sign-in now</b></Link></p>
                <p className='term'>Looking to create a page for a business? <a href=""><b>Get help</b></a></p>

            </div> :null}
        </>
    )
}

export default Signup
