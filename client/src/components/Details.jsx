import React from 'react'
import { useQuery } from 'react-query'
import { getDetails } from './getData'

export const Details=({selProduct,setSelProduct})=> {
    const {data,status}=useQuery(['pricelist',selProduct.id],getDetails)
    status=='success' && console.log(data.data)
    console.log('details:',selProduct.id)
  return (
    <div>
        <h1>{selProduct.name}</h1>
        <img src={selProduct.img_url} alt="pizza" />
{status=='success' && data.data.map(obj=>
    <div>Méret: {obj.size} - {obj.price}Ft</div>
    )}

        <button onClick={()=>setSelProduct(null)}>vissza...</button>
    </div>
  )
}
