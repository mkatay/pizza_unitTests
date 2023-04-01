import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import {configDb} from './configDb.js'

const db=mysql.createConnection(configDb);
const app=express();

app.use(express.json())
app.use(cors())

//1.a kinálatot megjelenítő API - get kérés
app.get('/',(request,response)=>{
    db.query('select id,name,img_url from products order by name',(err,results)=>{
        if(err) 
            console.log(err)
        else
            response.send(results)
    })
})

//2.a kiválasztott termék részleteit megjelenítő API - get kérés, url-ben érkezik a termék id-jje
app.get('/:id',(request,response)=>{
    const {id}=request.params
    db.query('select size,price from pricelist where product_id=?',[id],(err,results)=>{
        if(err) 
            console.log(err)
        else
            response.send(results)
    })
})


app.listen(5000,() => console.log('server listening on port 5000...'))