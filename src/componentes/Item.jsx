import React from 'react';
import {Link} from 'react-router-dom'


export const Item = ({id,nombre}) => {
  return (
    
        <div className='boxUsuario'>
        <div><Link to={`/item/${id}`}><button className='btnId'>ID: {id}</button></Link></div>
        <img src="https://i.postimg.cc/pLPM8nfn/user-1.png" alt="user" />
        <h2 className='nombre'>Nombre: {nombre}</h2>
        </div>
    
  )
}
