import React from 'react'

export const Footer = ({setpreview,mail,phno,bankname,acch,accno,website}) => {
  return (
    <div className='m-4'>

<p className="text-center border-t-2 border-black"><span className='font-bold'>Mail:</span>{mail},<span className='font-bold'>Phone No: </span>{phno},<span className='font-bold'>Bank Name: </span>{bankname},<span className='font-bold'>Acc Holder</span>{acch},<span className='font-bold'>Acc No: </span>{accno},
<span className='font-bold'>Website :</span>:{website}</p>
<button onClick={()=>{setpreview(false)}} className='bg-black font-bold text-white p-2 rounded mt-2'>Edit Information</button>
    </div>
  )
}
