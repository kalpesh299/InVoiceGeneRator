import React from 'react'

export const ClientInfo = ({cliname,climail,invno,invd,duedate,note}) => {
  return (
    <div>
          <h2>{cliname}</h2>
          <p>{climail}</p>
          
            <p className="text-end">Invoice No:{invno}</p>
            <p className="text-end">Invoice Date:{invd}</p>
            <p className="text-end">Due Date:{duedate}</p>

            <p className="md:w-2/5 w-2/4 p-2">
           {note}
          </p>
        
          </div>
  )
}
