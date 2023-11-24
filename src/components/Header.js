import React from 'react'

export const Header = ({print,name}) => {
  return (
    <div>
         <div className="flex justify-between  ">
           <h1 className='font-bold '>INVOICER</h1>
           
            <div className=' flex flex-col'>
               
                <div className=" flex ">
                <button className='mx-2 px-2 p-1 bg-blue-500 rounded-lg' onClick={print}>Print</button>
               <button className='mx-2 px-2 p-1 bg-red-500 rounded-lg'>Download</button>
               <button className='mx-2 px-2 p-1 bg-green-500 rounded-lg'>Send</button>
                </div>
              
             <h2 className="text-end mr-2 text-3xl font-bold pt-2">{name}</h2>
             <p className="text-end mr-2 text-l ">Kalyan,Mumbai</p>
           
            </div>
          </div>
    </div>
  )
}
