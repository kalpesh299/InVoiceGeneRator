
import './App.css';

function App() {
  return (
    <div className="w-screen flex items-center justify-center ">
     
         <div className=' border-2 shadow-lg w-full p-1 md:w-2/4'>
          {/* Header */}
          <div className="flex justify-between border-2 border-red-200 ">
           <h1 className='border-2 '>INVOICER</h1>
           
            <div className='border-black border-2 flex flex-col'>
              <div className=" flex ">
              <button className='mx-2 px-2 p-1 bg-blue-500 rounded-lg'>Print</button>
             <button className='mx-2 px-2 p-1 bg-red-500 rounded-lg'>Download</button>
             <button className='mx-2 px-2 p-1 bg-green-500 rounded-lg'>Send</button>
              </div>
             <h2 className="text-end mr-2 text-3xl font-bold pt-2">Kalpesh Patil</h2>
             <p className="text-end mr-2 text-l ">Kalyan,Mumbai</p>
           
            </div>
          </div>

          <div>
            client info
          </div>

         </div>
        


    </div>
  );
}

export default App;
