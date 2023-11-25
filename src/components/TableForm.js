import React from 'react'
import { v4 as uuidv4 } from "uuid"

export const TableForm = ({
    qty,
    setqty,
    desc,
    setdesc,
    price,
    setprice,
    amount,
setlist,
list
}) => {


const handleSubmit =(e)=>{
    e.preventDefault()
    // const nitem={
    //     id:uuidv4(),
    //     desc,
    //     qty,
    //     price,
    //     amount}
   setlist([...list,{
    id:uuidv4(),
    desc,
    qty,
    amount,
    price}]);
   
   console.log(list)
   setqty(0)
   setdesc("")
   setprice(0)
   
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='md:grid grid-cols-2 gap-5 mt-3'>
  <div className='flex flex-col'>
    <label>Description</label>
            <input type="text" value={desc} className='w-11/12' onChange={(e)=>setdesc(e.target.value)}/></div>
            <div className='flex flex-col'>
              <label>Qty</label>
            <input type="number" value={qty}  className='w-11/12' onChange={(e)=>{setqty(e.target.value)}}/></div>
            
  </div>
            <div className='md:grid grid-cols-2 gap-5'>
              <div className='flex flex-col'>
              <label>Price</label>
            <input type="number" value={price}  className='w-11/12' onChange={(e)=>setprice(e.target.value)}/>
              </div>
           
            <div className='flex flex-col'>
            <label>Amount</label>
            {amount}
            </div>
            
            </div>
           <button type='submit' className='bg-blue-500 mt-3' >Add Item</button> 
        </form>
       
    </div>
  )
}
