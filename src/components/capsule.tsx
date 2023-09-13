// import { typeCapsule } from "../types/typeCapsule";
 
export interface typeCapsule {

    serial: string;
    id: string;
    status: string;
    original_launch: string;
    original_launch_unix: number;
    launches: {name:string;flight:number}[];
    water_landings: number;
    land_landings:number;
    type: string;
    last_update: string;
    reuse_count: number;
    ShowPopup:() => void;
    
}

function capsule({serial,id,status,launches,land_landings,type,last_update,reuse_count,water_landings,ShowPopup}:typeCapsule){
    return (
        <>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg  hover:border-[0.5px] hover:border-black pb-4 space-y-4" onClick={() => ShowPopup()}>
            <img src='./img/spaceShuttle.svg' className="rounded-lg bg-slate-100 md:h-40 w-full"/>
            <div className="grid grid-cols-2 gap-4 px-2">
              <h1 className="col-span-2 md:col-span-1 text-left text-xs">Serial: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{serial}</span> </h1>
              <h1 className="col-span-2 md:col-span-1 text-left md:text-right text-xs">Status:<span className={`${status === 'active' ? 'bg-green-900': 'bg-red-900'} px-2 py-1 rounded-lg text-white`}>{status}</span></h1>
              <h1 className="text-left col-span-2 md:col-span-1 text-xs">Missions: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{launches && launches.length}</span></h1>
              <h1 className="text-left md:text-right col-span-2 md:col-span-1 text-xs"> <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>{type}</span></h1>
            </div>
            
        </div>
        </>
    )
}
export default capsule;