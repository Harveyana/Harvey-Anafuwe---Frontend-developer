import Nav from '../components/Nav';
import Banner from '../components/banner';
import SkeletonLoader from '../components/skeletonLoader';
import '../App.css'

function index() {


  return (
    <>
    <div className="w-full">
      <Nav/>
      <Banner/>
      <section id="banner" className="w-full pb-8">
        <div className='relative grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto overfloww-hidden'>
        <form action="" className='w-full col-span-12 md:col-span-5 grid grid-cols-12 gap-4'>
          {/* <label for="cars">Choose a car:</label> */}
          <select id="cars" name="cars" className='col-span-5 input rounded-xl py-3 px-4 bg-gray-100'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saabjhcjsjvkjsv</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="search" id="inputFilter" placeholder='filter directory' name="inputFilter" className='col-span-7 input rounded-xl px-4 bg-gray-100'/>
          <input type="search" id="inputSearch" placeholder='enter search term' name="inputSearch" className='col-span-8 input rounded-xl px-4 bg-gray-100 py-3'/>
          <input type="submit" id="inputSearch" name="inputFilter" className='col-span-4 input border-[0.2px] border-[#443081] border border-[#443081] rounded-xl px-4 bg-gray-100 py-3'/>
        </form>
        </div>
      </section>
      <section className='w-full pb-24'>
        <SkeletonLoader/>
      </section>
      
    </div>
    
    </>
  )
}

export default index
