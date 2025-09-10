import "../styles/sign-up.scss"
// import "../styles/landing.scss"

import React, { useState } from 'react'
function Signup() {
    const [formIndex,setFormIndex] =useState(0)
const users =localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]
const [newUser,setNewUser] =useState({
    email:"",
    password:"",
    num:"",
    fname:"",
    lname:""
})
const [errData, setErrData] = useState({});

const handleChange = (e) => {
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value }) 
 };
const nextBtn =()=>{
    if(email && password){
        setFormIndex(formIndex + 1)
        users.push(newUser)
    }
    else{
        newErr.err ="kindly input your email to sign up"
        setErrData(newErr);
    }
}
const handleValidation =()=>{
    const newErr={}
    if(fname && lname){
        newErr.fname ="kindly input your first name"
    }
    else if(fname && lname){
        newErr.lname ="kindly input your last name"
    }
    else if(
        newErr.fname ="kindly input your name"
    )
    setErrData(newErr);

}
const submit =()=>{
    handleValidation
    if(!errData){
        return;
    }
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const emailValidation = users.find((item) => item.email == formData.email);
    if (emailValidation) {
      console.log("Email Already Exist");
      return;
    }

    users.push(newUser);
}
// form content
let formContent;
if (formIndex ===0){
    formContent = <>
   <form action="">
   <h2>
    Stay up to date on your Industry .
</h2>
    <div>
        {errData.email && <span>{errData.email}</span>}
    <label htmlFor="email">Email or phone</label>
    <input type="text" id="email"onChange={handleChange} value={newUser.email} placeholder='email or phone number'  />
    </div>
    <div>
    {errData.password && <span>{errData.password}</span>}
    <label htmlFor="password">password</label>
    <input type="text" id="password"onChange={handleChange} value={newUser.password} placeholder='password' />
    </div>
    <input  type="submit" onClick={nextBtn} className="btn" value={"Join now"} />
</form></>
}
else if(formIndex ===1){
    formContent =<>
     <form action="">
    <div>
    {errData.err && <span>{errData.e}</span>}
    <label htmlFor="fname">First name</label>
    <input type="text" value={newUser.fname} placeholder='First name' onChange={handleChange} />
    </div>
    <div>
    <label htmlFor="lname">Last name</label>
    <input type="text" value={newUser.lname} placeholder='last name' onChange={handleChange}/>
    </div>
    <input value={"Continue"} className="btn" style={formIndex ===1? {display:"block"}:{display:"none"}}/>
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
              <input className="agree" onClick={submit} value={"Agree and join"} />
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
                 <p className='term'>Already on LinkedIn? <a href=""><b>Sign in</b></a></p>
                <p className='term'>Looking to create a page for a business? <a href=""><b>Get help</b></a></p>

            </div> :null}
        </>
    )
}

export default Signup
