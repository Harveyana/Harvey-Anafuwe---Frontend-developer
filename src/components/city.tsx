import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react'
interface saveProps{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string;
}

interface Props{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string;
    removeCity:(city:string) => void
    addTofavourites:(data:saveProps) => void
}
function city({temperature,isDay,time,imgUrl,description,humidity,Location,removeCity,addTofavourites}:Props){
    const [isloading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState<Props | any>({});
    const navigate = useNavigate();
    
    function saveToFavourites(){
        addTofavourites({
            Location,
            temperature,
            isDay,
            time,
            imgUrl,
            description,
            humidity
          })
        // console.log('favouriting')
        // setIsLoading(true);
        // const stringData: string | null = localStorage.getItem('favouriteData');
        // const favouriteData: Props[] = JSON.parse(stringData || '[]');

        // const itemIndex = favouriteData.findIndex(item => item.Location === fetchedData.Location);

        // if (itemIndex !== -1) {
        //     favouriteData[itemIndex] = fetchedData;
        // } else {
        //     favouriteData.push(fetchedData);
        // }
        // localStorage.setItem('favouriteData', JSON.stringify(favouriteData));
        // setIsLoading(false);
        // window.location.reload()
    }

    function SaveToLocal(fetchedData:saveProps) {
        console.log('this is feteched data',fetchedData);
    
        try {
            const stringData: string | null = localStorage.getItem('LocalData');
            const LocalData: saveProps[] = JSON.parse(stringData || '[]');
    
            const itemIndex = LocalData.findIndex(item => item.Location === fetchedData.Location);
    
            if (itemIndex !== -1) {
                LocalData[itemIndex] = fetchedData;
            } else {
                LocalData.push(fetchedData);
            }
    
            localStorage.setItem('LocalData', JSON.stringify(LocalData));
        } catch (error) {
            console.error('Error while saving to local storage:', error);
        }
    }

    const fetchData = async (lat?:number,long?:number,city?:string,) =>{
        setIsLoading(true);
        const position = `${lat},${long}`
    
        try {
          const res = await axios.get(`http://api.weatherstack.com/current?access_key=73cd0bad295dcfb9b44fae586a412bb7&query=${city? city: position}`)
          console.log(res)
          setIsLoading(false);
          if(res.data){
            setFetchedData({
            Location:res.data.location.name,
            temperature: res.data.current.temperature,
            isDay:res.data.current.is_day,
            time:res.data.location.localtime,
            imgUrl:res.data.current.weather_icons[0],
            description:res.data.current.weather_descriptions[0],
            humidity:res.data.current.humidity
          })
          SaveToLocal({
                Location:res.data.location.name,
                temperature: res.data.current.temperature,
                isDay:res.data.current.is_day,
                time:res.data.location.localtime,
                imgUrl:res.data.current.weather_icons[0],
                description:res.data.current.weather_descriptions[0],
                humidity:res.data.current.humidity,
            })
          }
          
        //   console.log('save to local')
        } catch (error) {
          setIsLoading(false);
          setFetchedData({
            Location,
            temperature,
            isDay,
            time,
            imgUrl,
            description,
            humidity
          })
          console.log(error)
        }
    }

    useEffect(()=>{
        // console.log('the city useEffect was triggered')
        if (navigator.onLine){
            fetchData(undefined,undefined,Location)
        }
        else{
            setFetchedData({
                Location,
                temperature,
                isDay,
                time,
                imgUrl,
                description,
                humidity
              })
        }

          
    },[])

    return(
        <>
        <div className="CITY flex flex-col items-center justify-center min-w-[7.5rem] h-[7.5rem] lg:min-w-[9rem] lg:h-[9rem] bg-white rounded-3xl shadow-lg shadow-gray-400" >
            {!isloading && <div className='WRAPPPER w-full flex flex-col items-center justify-center'>
                <div className="CITY-HEADING w-full px-4 flex flex-row items-center justify-between">

                    <button className='w-fit hover:bg-sky-700 LoadBtn rounded-full' onClick={() => saveToFavourites()}>
                        <svg className='z-99' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                        <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"/>
                        </svg>
                    </button>
                
                <button className='w-fit hover:bg-sky-700 LoadBtn rounded-full' onClick={() => removeCity(Location)}>
                     <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                    <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                    </svg>
                </button>
               
                </div>

                <h4 className=" CITY-NAME text-sm lg:text-lg truncate-text" onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                    {fetchedData.Location}
                </h4> 

                <div className='IMAGE w-[30%] flex flex-row justify-cent.er items-center my-2' onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                    {!fetchedData.imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src={imgUrl? imgUrl :"/weather-svgrepo-com.svg"}/>}
                    {fetchedData.imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src={fetchedData.imgUrl} />}
                </div>

                <h4 className=" text-sm lg:text-lg" onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                    {fetchedData.temperature}<sup>&deg;C</sup>

                </h4>
            </div>}
            {isloading && <div className='LOADING-STATE w-full flex flex-row items-center justify-center'>
                <div className='IMAGE w-[20%] flex flex-row justify-center items-center my-4'>
                    <img className="md:w-full md:h-full scale-150 rounded-full w-full h-full" src="/Hourglass.gif"/>
                </div>
            </div>}

            
        </div>
        </>
    )
}
export default city