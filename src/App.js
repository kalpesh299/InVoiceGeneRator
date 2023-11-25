
import { useState } from 'react';
import './App.css';
import { ClientInfo } from './components/ClientInfo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
const [preview,setpreview]=useState(false)
const [name,setname]=useState("")
const [mail,setmail]=useState("")
const [phno,setphno]=useState(1234567890)
const [bankname,setbankname]=useState("")
const [acch,setacch]=useState("")
const [accno,setaccno]=useState(0)
const [website,setwebsite]=useState("")
const [cliname,setcliname]=useState("")
const [climail,setclimail]=useState("")
const [invno,setinvno]=useState("")
const [invd,setinvd]=useState("")
const [duedate,setduedate]=useState("")
const [note,setnote]=useState("")



const print=()=>{
  window.print();
 
}


  return (
    <div className="w-screen flex items-center justify-center ">

      {preview? <div className='md:mt-4 border-2 shadow-lg w-full p-2 md:w-2/4'>
        <Header name={name} print={print} />
        <ClientInfo cliname={cliname} climail={climail} invno={invno} invd={invd} duedate={duedate} note={note} />
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
            <div className='md:grid  grid-cols-3 gap-5 md:mt-20'>
 
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
            
            <label className='m-2'>Notes :</label>
            <textarea cols='50' rows='10' value={note} className='border-2 border-gray-500 mb-1 w-4/5 m-2 block m-auto' onChange={(e)=>{setnote(e.target.value)}}>

            </textarea>
          
          
            <button className='bg-blue-500 md:w-1/4 w-full m-auto' onClick={()=>setpreview(true)}>Preview</button>
          </div>
          }
     
        
         </div>
  );
}

export default App;
