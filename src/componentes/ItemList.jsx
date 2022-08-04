import React from 'react'
import { Item } from './Item'


export const ItemList = ({usuarios}) => {
  return (
    <div>
        {usuarios.map((user)=>{
            return(
                <Item key={user.id} nombre={user.name} id={user.id}  />
            )
        })}
    </div>
  )
}
