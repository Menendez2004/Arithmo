import React, { useState } from 'react'

 const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "", 
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const Register = () =>{
        console.log(JSON.stringify(values))
    }
  return{

    ...values,
    onChange, 
    Register
    
  }
}

export default RegisterViewModel; 