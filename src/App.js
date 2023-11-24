
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
            <h1 className='text-center'>Form</h1>
       <div className='flex md:justify-between md:flex-row flex-col'>
       <label for='name' className='m-2'>Name :</label>
            <input autoComplete='off' value={name} type='text' className='border-2 border-gray-500 mb-1 w-4/5 m-2' onChange={(e)=>{setname(e.target.value)}}/>
       </div>
       <div className='flex justify-between md:flex-row flex-col '>
            <label for='email' className='m-2'>Email :</label>
            <input type='email' value={mail}  className='border-2 border-gray-500 mb-1 w-4/5 md:m-2 ' onChange={(e)=>{setmail(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for='phone no' className='m-2'>Phone Number :</label>
            <input type='number' value={phno}  className='border-2 border-gray-500 mb-1 w-4/5 m-2' onChange={(e)=>{setphno(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for='bank' className='m-2'>Banck Name :</label> 
            <input type='text' value={bankname}  className='border-2 border-gray-500 mb-1 w-4/5 m-2' onChange={(e)=>{setbankname(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for='acc holder' className='m-2'>Acc Holder :</label>
            <input type='text' value={acch}  className='border-2 border-gray-500 mb-1 w-4/5 m-2' onChange={(e)=>{setacch(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            
            <label for='acc no' className='m-2'>Acc No :</label>
            <input type='number' value={accno}  className='border-2 border-gray-500 mb-1 w-4/5 m-2' onChange={(e)=>{setaccno(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for='website' className='m-2'>Your Website :</label>
            <input type='text' value={website}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setwebsite(e.target.value)}}/>
            </div>
          
                <h1 className='text-center'>Client Details :</h1>
                <div className='flex justify-between md:flex-row flex-col'>
            <label for="" className='m-2'>Client Name :</label>
            <input type='text' value={cliname}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setcliname(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for="" className='m-2'>Client Mail :</label>
            <input type='text' value={climail}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setclimail(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for="" className='m-2'>Invoice No :</label>
            <input type='text' value={invno}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setinvno(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for="" className='m-2'>Invoice Date :</label>
            <input type='date' value={invd}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setinvd(e.target.value)}}/>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
            <label for="" className='m-2'>Due Date :</label>
            <input type='date' value={duedate}  className='border-2 border-gray-500 mb-1 w-4/5 m-2 ' onChange={(e)=>{setduedate(e.target.value)}}/>
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
