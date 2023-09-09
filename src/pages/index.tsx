import Nav from '../components/Nav';
import Banner from '../components/banner';
import '../App.css'

function index() {


  return (
    <>
    <div className="w-full">
      <Nav/>

      <section id="banner" className="w-full pb-24">

        <Banner/>

      </section>
      
    </div>
    
    </>
  )
}

export default index
