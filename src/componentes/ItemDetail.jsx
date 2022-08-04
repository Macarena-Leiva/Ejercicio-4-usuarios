import React from 'react';
import {Link} from 'react-router-dom'

export const ItemDetail = ({item}) => {
  return (
    <>
    <div className='boxInfoUser'>

            <h2 className='detalle'>ID: {item.id}</h2>
            <h2 className='detalle'>NOMBRE: {item.name}</h2>
            <h2 className='detalle'>EMAIL: {item.email}</h2>
            <h2 className='detalle'>USUARIO: {item.username}</h2>
        
     
    </div>
    <Link to='/'><button className='volver'>VOLVER</button></Link>
    </>
  )
}
