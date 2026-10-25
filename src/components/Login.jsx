import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail]=useState("")
    const [pass, setPass]=useState("")

    //funcion que previene que se recargue la web

    function handLeSubmit(e){
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            alert("El email o la contraseña son necesarios.")
            return
        }
        if(pass.length<6){
             alert("la contraseña tiene que tener al menos 6 caracteres")
             return
         }
        alert("Iniciaste sesión!")
        
        setEmail("")
        setPass("")

    }


  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="" onSubmit={(e)=>{handLeSubmit(e)}}>
        <label htmlFor="">Ingrese su Email</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />

        <label htmlFor="">Ingrese su Contraseña</label>
        <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" />
    
        <button>Login</button>
      </form>
    
    </div>
  )
}
