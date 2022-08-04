import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';

export const Usuarios = () => {

    const [usuarios,setUsuarios] = useState([])

    const obtenerUsuarios = async () => {
        const obtenerDatos = await fetch('https://jsonplaceholder.typicode.com/users');
        const res=await obtenerDatos.json();
        setUsuarios(res); //"Respuesta de async/await", res
} 


  useEffect(()=>{
    obtenerUsuarios()    
},[])

  return (
    <div className='listaUsuarios'>
        <h1>USUARIOS</h1>
        <ItemList  usuarios ={usuarios}/>
       
    </div>
  )
}
