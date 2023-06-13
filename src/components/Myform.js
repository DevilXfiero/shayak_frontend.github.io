import React, { useState }  from "react";
import Button from '@mui/material/Button';


function Myform()
{ const [userRegister,setuserRegister] = useState({
  username :"",
  email : "",
  phone : "",
  pass : ""
});

  function handleChange(event)
  {  const {name,value}=event.target;
      setuserRegister(prevValue=>
        {
            return {...prevValue,[name]:value};
        }
        )

      
  }

  
  return <form>
   <div>
   <label> Fullname</label>
   <input onChange={handleChange} type="text" name="username" id="username" value={userRegister.username} />
   
   </div>

   <div>
   <label>Email</label>
   <input onChange={handleChange} type="text" name="email" id="email" value={userRegister.email} />
   </div>

   <div>
   <label>Phone</label>
   <input onChange={handleChange} type="text" name="phone" id="phone" value={userRegister.phone} />
   </div>

   <div>
   <label>Password</label>
   <input onChange={handleChange} type="text" name="pass" id="pass" value={userRegister.pass} />
   </div>
   
   <Button variant="contained">Submit</Button>
  </form>
   


}

export default Myform;