interface info {
    value: number|string;
    ValueName: string;
    imgUrl:string
}
function dataBox({ValueName,value,imgUrl}:info){
    return(
        <>
        <div className="CITY flex flex-col items-center justify-start  min-w-[12rem] h-[12rem] lg:min-w-[14rem] lg:h-[14rem] bg-white rounded-3xl shadow-lg shadow-gray-500 py-4">
            <h4 className=" truncate-text CITY-NAME self-start mx-4 lg:text-xl text-gray-500">
                {ValueName}
            </h4> 

            <img className="mt-4 border rounded-full w-[30%]" src={imgUrl ? imgUrl : "/weather-svgrepo-com.svg"}/>


            <h4 className=" text-xl lg:text-2xl mt-4 truncate-text">
            {value}{ValueName == 'temperature' && <sup>&deg;C</sup>}
            </h4>
        </div>
        </>
    )
}
export default dataBox