import axios from 'axios'
let url='http://localhost:5000'

export const getProducts=async ()=>{
    const response=await axios.get(url+'/')
    return response
}
export const getDetails=async ({queryKey})=>{
    console.log('queryKey:',queryKey)

    const response=await axios.get(url+'/'+queryKey[1])
    return response
}