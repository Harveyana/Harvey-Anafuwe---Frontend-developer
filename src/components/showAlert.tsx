interface Alert {
    showAlert:boolean
    toggleAlert: (state: boolean) => void;
}
function showAlert({showAlert,toggleAlert}:Alert){
    return (
        <>
        {showAlert && <div className='ALERT border w-fit h-fit rounded-3xl absolute bg-gray-500'>
          <div className='container w-[25rem] flex flex-col items-center justify-center space-y-4 py-2'>
            <div className='IMAGE w-[20%] flex flex-row justify-center items-center my-4'>
                <img className="md:w-full md:h-full border rounded-full w-full h-full" src="/weather-svgrepo-com.svg"/>
            </div>
            <h4 className="text-lg text-white">
              Please grant us access to Know your Location and refresh
            </h4>
            <button className='border bg-gray-500 text-white px-8 py-2 rounded-xl' onClick={() => toggleAlert(false)}>
              Okay
            </button>
          </div>
        </div>}
        </>
    )
}
export default showAlert;