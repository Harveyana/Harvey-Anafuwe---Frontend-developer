import SkeletonLoader from '../components/skeletonLoader';
import Capsule from '../components/capsule';
import typeCapsule from '../types/typeCapsule';

interface typeDataGrid {
    pageData:typeCapsule[]
    setPopup:(data:typeCapsule) => void;
}
function dataGrid({pageData,setPopup}:typeDataGrid){
    return (
        <>
        <section data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="700" className='w-full pb-12'>
        {!pageData.length && <SkeletonLoader/>}
        {<div className='grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto over-flow-hidden'>
        {pageData.length && pageData.map((item:typeCapsule, index:number) => (
          <Capsule key={index} {...item} ShowPopup={setPopup}/>
          ))}
        </div>
        }
      </section>
        </>
    )
}
export default dataGrid;