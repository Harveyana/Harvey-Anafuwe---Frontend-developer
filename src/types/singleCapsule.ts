import typeCapsule from "./typeCapsule";
export default interface singleCapsule {

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
    ShowPopup:(data:typeCapsule) => void;
    
}