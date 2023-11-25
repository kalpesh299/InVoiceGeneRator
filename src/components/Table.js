
import { v4 as uuidv4 } from 'uuid';

export const Table = ({editing,setenditing,price,setprice, qty,desc,setdesc,setqty,list,setlist,setpreview}) => {
  
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
