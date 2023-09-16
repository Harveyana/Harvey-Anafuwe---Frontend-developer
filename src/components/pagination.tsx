import typePagination from "../types/typePagination";

function pagination({chunkedData,setPage}:typePagination){
    const numberOfComponents = chunkedData.length
    const componentArray = Array.from({ length: numberOfComponents });

    return (
        <>
        <section className="w-full pb-8 max-w-screen-xl mx-auto overflow-hidden">
        <ul className='grid grid-cols-6 md:grid-cols-12 gap-2 px-6 md:px-12'>
            {componentArray.map((_, index) => (
            <li className='cols-span-1 w-full' key={index}>
              <button onClick={() => setPage(index+1)} className="w-full rounded-xl bg-gray-200 hover:bg-[#D08F24] focus:border-2 focus:border-black hover:text-black py-2 text-xs">
                {index+1}
              </button>
            </li>
            ))}
        </ul>
      </section>
        </>
    )
}
export default pagination;