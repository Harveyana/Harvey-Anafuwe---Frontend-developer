interface loader {
    showLoading:boolean
    // toggleAlert: (state: boolean) => void;
}
function loading({showLoading}:loader){
    return (
        <>
        {showLoading && <div className='LOADING-STATE h-[350%] w-[100%] flex flex-row items-center justify-center md:h-[100%] border rounded-3xl absolute bg-gray-500'>
          <div className='container flex flex-row items-center justify-center'>
            <div className='IMAGE w-[20%] flex flex-row justify-center items-center my-4'>
                <img className="md:w-full md:h-full border rounded-full w-full h-full" src="/weather-svgrepo-com.svg"/>
            </div>
          </div>
        </div>}
        </>
    )
}
export default loading;