import formtype from "../types/formtype";

function form({reset,handleSubmit,handleInputChange,inputFilter,inputSearch}:formtype){
    return (
        <>
        <section
        data-aos="fade-up"
        data-aos-delay="700"
        id="mainSection" className="w-full pb-8 max-w-screen-xl mx-auto overflow-hidden">
        <div className='relative grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto overfloww-hidden'>

        <form onSubmit={handleSubmit} className='w-full col-span-12 md:col-span-5 grid grid-cols-12 gap-4'>
          <select 
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="900" value={inputFilter} onChange={handleInputChange} id="inputFilter" name="inputFilter" className='col-span-5 input rounded-xl py-3 px-4 bg-gray-100'>
            <option value="status">Status</option>
            <option value="type">Type</option>
            <option value="serial">Serial</option>
          </select>

          <button data-aos="fade-left"
           data-aos-delay="700" onClick={reset} className='col-span-4 input border-[0.2px] border-[#443081] border border-[#443081] rounded-xl 3/4 md:w-1/2 bg-gray-100 md:py-2'>
            Reset
          </button>

          <input 
           data-aos="fade-right"
           data-aos-once="true"
           data-aos-delay="1000" value={inputSearch} onChange={handleInputChange} type="search" id="inputSearch" placeholder='enter search term' name="inputSearch" className='col-span-8 input rounded-xl px-4 bg-gray-100 py-3'/>
          <button data-aos="fade-left"
           data-aos-delay="700" type="submit" id="inputSubmit" name="inputSubmit" className='col-span-4 input border-[0.2px] border-[#443081] border border-[#443081] rounded-xl px-4 bg-gray-100 py-3'>Search</button>
        </form>
        
        </div>
      </section>
        </>
    )
}
export default form;