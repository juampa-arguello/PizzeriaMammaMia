import { useState } from "react"

export default function Register() {

    const [email, setEmail]=useState("")
    const [pass, setPass]=useState("")
    const [confirmacionPass, setConfirmacionPass]=useState("")

    function handLeSubmit(e){
        e.preventDefault()
        if(!email.trim() || !pass.trim() || !confirmacionPass.trim()){
            alert("Faltan campos por completar.")
            return
        }
        if (pass.length<6){
            alert("La contraseña tiene que tener al menos 6 caracteres.")
            return
        }

        if (pass!=confirmacionPass){
            alert("No coinciden las contraseñas")
            return
        }

        alert("Iniciaste sesion")
        
        setEmail("")
        setPass("")
        setConfirmacionPass("")

    }



    return (
        <div className="login" >
            <form action=""  onSubmit={(e)=>{handLeSubmit(e)}}>
            <label  htmlFor="">Ingrese su Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />

            <label htmlFor="">Ingrese su contraseña</label>
            <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" />

            <label htmlFor="">Vuelva a ingresar su contraseña</label>
            <input value={confirmacionPass} onChange={(e)=>{setConfirmacionPass(e.target.value)}} type="password" />

            <button>Registrar</button>
        </form>
        </div>
        
    )
}
