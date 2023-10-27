import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

function Login(props) {

const baseUrl="https://localhost:44322/api/usuarios";
const cookies = new Cookies();

const [form, setForm]=useState({
  username:'',
  password: ''
});
  const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

const iniciarSesion=async()=>{

    const url = "https://magaliabratte-001-site1.itempurl.com/api/cuentas/registrar"
    const resp = await fetch(url)
    .then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: '/'});
        alert("Bienvenido: "+respuesta.nombre+" "+respuesta.apellido_paterno);
        props.history.push('/menu');
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })

    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
if(cookies.get('id')){
  props.history.push('/menu');
}
  },[]);

    return (
        <div className="containerPrincipal">
        <div className="containerLogin">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
}

export default Login;