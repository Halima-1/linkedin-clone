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
    <div>
    <label htmlFor="email">Email or phone</label>
    <input type="text" value={newUser.email} placeholder='email or phone number' onChange={handleChange} />
    </div>
    <div>
    <label htmlFor="password">password</label>
    <input type="text" value={newUser.password} placeholder='password' onChange={handleChange}/>
    </div>
    <button onClick={nextBtn}>Join now</button>
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
    <button>Continue</button>
</form></>
}

    return (
        <>
        {formContent}
        </>
    )
}

export default Signup
