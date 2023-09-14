import popuptype from "../types/popupType";
import data from "./data";

function Popup({capsule,showPopup,setPopup}:popuptype){
    
    return (
        <>
        {showPopup && <section className='w-full pb-8 flex flex-row items-center justify-center'>
        <div className='w-[90%] md:w-[35%] popup '>
          <div className='grid grid-cols-12 gap-4 shadow-lg shadow-black w-full rounded-xl py-2 bg-white'>
            <img src='./img/spaceShuttle.svg' className="rounded-lg col-span-12 md:col-start-2 md:col-span-10 bg-slate-100 md:h-40 w-full"/>
            <div className='col-span-12 md:col-start-2 md:col-span-10 grid grid-cols-6 gap-4 px-2'>
              <div className="col-span-6 grid grid-cols-6 gap-4 px-2">
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Serial:<span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{capsule.serial}</span> </h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Status: <span className={`${capsule.status === 'active' ? 'bg-green-900': 'bg-red-900'} px-2 py-1 rounded-lg text-white`}>{capsule.status}</span></h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Launches: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{capsule.launches.length}</span></h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Type: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{capsule.type}</span></h1>
                  <h1 className="col-span-6 lg:col-span-6 text-left text-xs">{capsule.last_update}</h1>
              </div>
              <button onClick={() => setPopup(data)} className="col-span-2 w-[80%] rounded-xl bg-black hover:bg-[#D08F24] focus:border-2 focus:border-black hover:text-black text-white py-2 text-xs">
                Close
              </button>
            </div>
          </div>
        
        </div>
      </section>}
        </>
    )
}

export default Popup;