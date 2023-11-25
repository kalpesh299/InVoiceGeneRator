import React from 'react'
import { Table } from './Table'

export const ClientInfo = ({cliname,climail,invno,invd,duedate,note,list}) => {
  return (
    <div>
          <h2 className='font-bold text-l'>{cliname}</h2>
          <p className='font-bold text-l'>{climail}</p>
          
            <p className="text-end " ><span className='font-bold text-l'>Invoice No:</span>{invno}</p>
            <p className="text-end " ><span className='font-bold text-l'>Invoice Date:</span>{invd}</p>
            <p className="text-end "><span className='font-bold text-l'>Due Date:</span>{duedate}</p>

         <Table list={list}/>
            <p className="md:w-2/5 w-2/4 p-2 font-mono">
           {note}
          </p>
        
          </div>
  )
}
