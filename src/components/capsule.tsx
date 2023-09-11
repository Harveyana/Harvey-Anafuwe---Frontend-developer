
function capsule(){
    return (
        <>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg  hover:border-[0.5px] hover:border-black pb-4 space-y-4">
            <img src='./img/spaceShuttle.svg' className="rounded-lg bg-slate-100 md:h-40 w-full"/>
            <div className="grid grid-cols-2 gap-4 px-2">
              <h1 className="col-span-2 md:col-span-1 text-left text-xs">Serial:<span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>C101</span> </h1>
              <h1 className="col-span-2 md:col-span-1 text-left text-xs">Status: <span className='bg-green-300 px-2 py-1 rounded-lg text-white'>Active</span></h1>
              <h1 className="text-left col-span-2 md:col-span-1 text-xs">Missions: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>3</span></h1>
              <h1 className="text-left col-span-2 md:col-span-1 text-xs">ID: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>dragon1</span></h1>
            </div>
            
        </div>
        </>
    )
}
export default capsule;