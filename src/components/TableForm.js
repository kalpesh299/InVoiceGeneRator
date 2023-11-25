import React, { useState } from 'react'
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
list,editing,setenditing
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
   setenditing(false)
}

const deletItem=(id)=>{
  setlist(list.filter((el)=>{
    return el.id!==id;
  }))
}

const editeItem=(id)=>{

const rowTobedit=list.find((row)=>row.id===id);
setlist(list.filter((el)=>{
    return el.id!==id;
  }))
setdesc(rowTobedit.desc);
setprice(rowTobedit.price);
setqty(rowTobedit.qty)
setenditing(true)
// setpreview(false)
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
           <button type='submit' className='bg-blue-500 mt-3' >{editing?"edit Item":"add Item"}</button> 
        </form>
        <table className='w-11/12 m-4'>

        <thead className='font-bold'>
            <tr className='bg-gray-200'>
                <td className='border-2 border-black '>
                    Description
                </td>
                <td className='border-2 border-black'>Quantity</td>
                <td className='border-2 border-black'>Price</td>
                <td className='border-2 border-black'>Amount</td>
           </tr>
        </thead>
        {list.map((el)=>{
           return (
            <tr key={uuidv4()}>
          <td className='border-2 border-black'>{el.desc}</td>
          <td className='border-2 border-black'>{el.qty}</td>
          <td className='border-2 border-black'>{el.price}</td>
          <td className='border-2 border-black'>{el.amount}</td>
          <button onClick={()=>deletItem(el.id)} >❌</button>
          <button onClick={()=>editeItem(el.id)}>📝</button>
           </tr>
           
           )  
        })}
   

        </table>
    </div>
  )
}
