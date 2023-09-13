import Capsule from "./capsule";
import { typeCapsule } from "../types/typeCapsule";

function capsules(data:typeCapsule[]){
    return (
        <>
        {/* <div className='grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto over-flow-hidden'>
        {data.length && data.map((item:typeCapsule, index:number) => (
          <Capsule key={index} {...item}/>
          ))}
        </div> */}
        </>
    )
}
export default capsules;

// {favouritesData.sort().map((item:Props, index:number) => (
//   <FavouriteCity key={index} {...item} removefavourite={removeFavourite}/>
// ))}