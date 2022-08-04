import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';



export const ItemDetailContainer = () => {

    const [item,setItem] = useState([]);
    const { id } = useParams()

    const obtenerUnUsuario = async () =>{
        const datos = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const datosUnUsuario = await datos.json();
        setItem(datosUnUsuario);
    }

    useEffect(()=>{
        obtenerUnUsuario()
    })

  return (
    <div>
        <h2>DETALLE DE USUARIO </h2>
        <ItemDetail item={item} />
     
    </div>
  )
}
