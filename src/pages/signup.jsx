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
    setFormIndex(formIndex + 1)
}
let formContent;
if (formIndex ===0){
    formContent = <>
   <form action="">
   <h2>
    Stay up to date on your Industry .
</h2>
    <div>
    <label htmlFor="email">Email or phone</label>
    <input type="text" id="email" value={newUser.email} placeholder='email or phone number' onChange={handleChange} />
    </div>
    <div>
    <label htmlFor="password">password</label>
    <input type="text" id="password" value={newUser.password} placeholder='password' onChange={handleChange}/>
    </div>
    <input onClick={nextBtn} className="btn" value={"Join now"} />
</form></>
}
else if(formIndex ===1){
    formContent =<>
     <form action="">
    <div>
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
              <input className="agree" onClick={nextBtn} value={"Agree and join"} />
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
