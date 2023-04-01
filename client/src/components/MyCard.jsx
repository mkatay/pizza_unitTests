import React from 'react'
import {Card,CardBody,CardTitle,Button} from 'reactstrap'

export const MyCard=({id,name,img_url,setSelProduct})=> {
  return (
    <Card  style={{width: '18rem' }}>
  <img     alt="name"  title={name}  src={img_url}  />
  <CardBody>
    <CardTitle tag="h5">  {name} </CardTitle>
    <Button onClick={()=>setSelProduct({id,name,img_url})}>Részletek...</Button>
  </CardBody>
</Card>
  )
}
