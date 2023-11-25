
import React,{ useState,useEffect } from 'react';
import './App.css';
import { ClientInfo } from './components/ClientInfo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TableForm } from './components/TableForm';

function App() {
const [preview,setpreview]=useState(true)
const [name,setname]=useState("Kalpesh Patil")
const [mail,setmail]=useState("kalpesh@gmail.com")
const [phno,setphno]=useState(1234567890)
const [bankname,setbankname]=useState("SBI")
const [acch,setacch]=useState("Kalpesh Patil")
const [accno,setaccno]=useState(23456123456)
const [website,setwebsite]=useState("www.kalpeshInfo.com")
const [cliname,setcliname]=useState("SH Healthcare")
const [climail,setclimail]=useState("shcare@gmail.com")
const [invno,setinvno]=useState("12344")
const [invd,setinvd]=useState("12/10/23")
const [duedate,setduedate]=useState("12/12/23")
const [note,setnote]=useState("Thank You for shopping as per above please pay mentioned amout before due date")
const[qty,setqty]=useState(0)
const[desc,setdesc]=useState("")
const[price,setprice]=useState(0)
const[amount,setamount]=useState(0)
const [list,setlist]=useState([]);

console.log(list)
const print=()=>{
  window.print();
 
}

const dnld=()=>{
  window.download();
}

useEffect(()=>{
  const handelAmount=()=>{
    setamount(qty*price)
  }
 
  handelAmount();
},[qty,price])


  return (
    <div className="w-screen flex items-center justify-center ">

      {preview? <div className='md:mt-4 border-2 shadow-lg w-full p-2 md:w-2/4'>
        <Header name={name} print={print} download={dnld}/>
        <ClientInfo cliname={cliname} climail={climail} invno={invno} invd={invd} duedate={duedate} note={note} list={list} />
        <Footer mail={mail}  phno={phno} bankname={bankname} acch={acch} accno={accno} website={website} setpreview={setpreview} />
          </div>:
          <div className='md:mt-4 border-2 shadow-lg w-full p-2 flex flex-col  md:w-2/4 '>
            <h1 className='text-center font-bold text-xl'>Form</h1>
            <div className='md:grid grid-cols-3 gap-5 md:mt-5'>

            <div className='flex md:justify-between  flex-col'>
       <label for='name' className=''>Name :</label>
            <input autoComplete='off' value={name} type='text' className='border-2 border-gray-500 mb-1 w-4/5 ' onChange={(e)=>{setname(e.target.value)}}/>
       </div>
       <div className='flex justify-between  flex-col '>
            <label for='email' className=''>Email :</label>
            <input type='email' value={mail}  className='border-2 border-gray-500 mb-1 w-4/5  ' onChange={(e)=>{setmail(e.target.value)}}/>
            </div>
            <div className='flex justify-between  flex-col'>
            <label for='phone no' className=''>Phone Number :</label>
            <input type='number' value={phno}  className='border-2 border-gray-500 mb-1 w-4/5 ' onChange={(e)=>{setphno(e.target.value)}}/>
            </div>
            </div>
      
            <div className='md:grid grid-cols-3 gap-10 md:mt-2'>
            <div className='flex   flex-col'>
            <label for='bank' className=''>Banck Name :</label> 
            <input type='text' value={bankname}  className='border-2 border-gray-500 mb-1 w-4/5 ' onChange={(e)=>{setbankname(e.target.value)}}/>
            </div>
            <div className='flex   flex-col'>
            <label for='acc holder' className=''>Acc Holder :</label>
            <input type='text' value={acch}  className='border-2 border-gray-500 mb-1 w-4/5 ' onChange={(e)=>{setacch(e.target.value)}}/>
            </div>
            <div className='flex justify-between flex-col'>
            
            <label for='acc no' className=''>Acc No :</label>
            <input type='number' value={accno}  className='border-2 border-gray-500 mb-1 w-4/5 ' onChange={(e)=>{setaccno(e.target.value)}}/>
            </div>
            </div>
           
          
            <div className='flex justify-between flex-col'>
            <label for='website' className=''>Your Website :</label>
            <input type='text' value={website}  className='border-2 border-gray-500 mb-1 w-11/12 ' onChange={(e)=>{setwebsite(e.target.value)}}/>
            </div>
          
                <h1 className='text-center font-bold text-xl'>Client Details</h1>
                <div className='flex justify-between  flex-col'>
            <label for="" className='mt-2'>Client Name :</label>
            <input type='text' value={cliname}  className='border-2 border-gray-500 mb-1 w-11/12  ' onChange={(e)=>{setcliname(e.target.value)}}/>
            </div>
            <div className='flex justify-between flex-col'>
            <label for="" className=''>Client Mail :</label>
            <input type='text' value={climail}  className='border-2 border-gray-500 mb-1 w-11/12   ' onChange={(e)=>{setclimail(e.target.value)}}/>
            </div>



            <div className='md:grid  grid-cols-3 gap-5 md:mt-10'>
            <div className='flex   flex-col'>
            <label for="" className='font-bold'>Invoice No :</label>
            <input type='text' value={invno}  className='border-2 border-gray-500 px-2  w-4/5  ' onChange={(e)=>{setinvno(e.target.value)}}/>
            </div>
            <div className='flex   flex-col'>
            <label for="" className='font-bold'>Invoice Date :</label>
            <input type='date' value={invd}  className='border-2 border-gray-500 px-2  w-4/5  ' onChange={(e)=>{setinvd(e.target.value)}}/>
            </div>
            <div className='flex   flex-col'>
            <label for="" className='font-bold'>Due Date :</label>
            <input type='date' value={duedate}  className='border-2 border-gray-500 px-2  w-4/5  ' onChange={(e)=>{setduedate(e.target.value)}}/>
            </div>

            </div>

           <TableForm 
            qty={qty}
            setqty={setqty}
            desc={desc}
            setdesc={setdesc}
            price={price}
            setprice={setprice}
            amount={amount}
            list={list}
            setlist={setlist}
setpreview={setpreview}
            />
            
            <label className='m-2'>Notes :</label>
            <textarea cols='50' rows='10' value={note} className='border-2 border-gray-500 mb-1 w-4/5 block m-auto' onChange={(e)=>{setnote(e.target.value)}}>

            </textarea>
          
          
            <button className='bg-blue-500 md:w-1/4 w-full m-auto' onClick={()=>setpreview(true)}>Preview</button>
          </div>
          }
     
        
         </div>
  );
}

export default App;
