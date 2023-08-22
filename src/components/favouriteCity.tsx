import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react'

interface Props{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string
}

function favouriteCity({temperature,isDay,time,imgUrl,description,humidity,Location}:Props){
    const [isloading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState<Props | any>({});
    const navigate = useNavigate();
    

    function SaveToLocal(fetchedData:Props) {
        console.log('this is feteched data',fetchedData);
    
        try {
            const stringData: string | null = localStorage.getItem('favouriteData');
            const favouriteData: Props[] = JSON.parse(stringData || '[]');
    
            const itemIndex = favouriteData.findIndex(item => item.Location === fetchedData.Location);
    
            if (itemIndex !== -1) {
                favouriteData[itemIndex] = fetchedData;
            } else {
                favouriteData.push(fetchedData);
            }
    
            localStorage.setItem('favouriteData', JSON.stringify(favouriteData));
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
                humidity:res.data.current.humidity
            })
          }
          
        //   console.log('save to local')
        } catch (error) {
          setIsLoading(false);
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
        
        <div className="CITY flex flex-col items-center justify-center min-w-[8rem] h-[8rem] lg:min-w-[11rem] lg:h-[11rem] bg-white rounded-3xl mt-6 shadow-lg shadow-gray-500 " >
          {!isloading && <div className='WRAPPPER w-full flex flex-col items-center justify-center'>

                <div className="CITY-HEADING w-full px-4 flex flex-row items-center justify-between">

                    <div className='w-fit bg-white'>
                    
                    </div>
                    
                    <button className='w-fit hover:bg-sky-700 LoadBtn rounded-full'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                        <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
                        </svg> 
                    </button>
                    
                </div>
                <h4 className=" CITY-NAME lg:text-lg truncate-text" onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                {fetchedData.Location}
                </h4> 

                <div className='IMAGE w-[30%] flex flex-row justify-cent.er items-center my-2' onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                        {!fetchedData.imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src={imgUrl? imgUrl :"/weather-svgrepo-com.svg"}/>}
                        {fetchedData.imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src={fetchedData.imgUrl} />}
                </div>

                <h4 className="lg:text-lg" onClick={() => navigate(`/weather?city=${fetchedData.Location}`)}>
                {fetchedData.temperature} <sup>&deg;C</sup>
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
export default favouriteCity