import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Table = ({list}) => {
  return (
    <div>
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
           </tr>
           )  
        })}
   

        </table>
    </div>
  )
}
