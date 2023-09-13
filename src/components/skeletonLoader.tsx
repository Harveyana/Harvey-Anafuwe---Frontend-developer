import Skeleton from "./skeleton";
function skeletonLoader(){
    return (
        <>
        <div className='grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto over-flow-hidden'>

          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          

        </div>
        </>
    )
}
export default skeletonLoader;