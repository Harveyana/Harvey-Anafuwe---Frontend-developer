import Capsule from "./capsule";
function capsules(){
    return (
        <>
        <div className='grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto over-flow-hidden'>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
          <Capsule/>
        </div>
        </>
    )
}
export default capsules;