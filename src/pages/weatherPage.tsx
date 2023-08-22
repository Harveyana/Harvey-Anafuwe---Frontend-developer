import axios from 'axios'
import { useLocation } from 'react-router-dom';
import DataBox from "../components/dataBox"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string;
    windSpeed:string|number;
    Pressure:string|number;
    WindDirection:string
}

function weatherPage(){
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState<Props | any>({});
    const navigate = useNavigate();
    const city:string|any = new URLSearchParams(location.search).get('city');

    function saveToLocal(fetchedData:Props) {        
        localStorage.setItem('recentData', JSON.stringify(fetchedData));
    }
    function retrieveFromLocal() {   
            console.log('fetching from local') 
            const stringData: string|any = localStorage.getItem('recentData');
            const GeneralData: Props|any = JSON.parse(stringData);
    
            if (GeneralData.Location) {
                setFetchedData({GeneralData})
                console.log(fetchedData)
            } else {
                navigate('/')
            }
    }

    const fetchData = async (lat?:number,long?:number,city?:string,) =>{
        setIsLoading(true);
        const position = `${lat},${long}`
    
        try {
          const res = await axios.get(`http://api.weatherstack.com/current?access_key=73cd0bad295dcfb9b44fae586a412bb7&query=${city? city: position}`)
          console.log(res)
          setIsLoading(false);
          setFetchedData({
            Location:`${res.data.location.name}, ${res.data.location.country}`,
            temperature: res.data.current.temperature,
            isDay:res.data.current.is_day,
            time:res.data.location.localtime,
            imgUrl:res.data.current.weather_icons[0],
            description:res.data.current.weather_descriptions[0],
            humidity:res.data.current.humidity,
            windSpeed:res.data.current.wind_speed,
            Pressure:res.data.current.pressure,
            WindDirection:res.data.current.wind_dir
          })
          saveToLocal({
            Location:`${res.data.location.name}, ${res.data.location.country}`,
            temperature: res.data.current.temperature,
            isDay:res.data.current.is_day,
            time:res.data.location.localtime,
            imgUrl:res.data.current.weather_icons[0],
            description:res.data.current.weather_descriptions[0],
            humidity:res.data.current.humidity,
            windSpeed:res.data.current.wind_speed,
            Pressure:res.data.current.pressure,
            WindDirection:res.data.current.wind_dir
          })
          console.log(isLoading)
        } catch (error) {
          console.log('jus error')
          setIsLoading(false);
          retrieveFromLocal()
          
        }
      }
      useEffect(()=>{
        if (navigator.onLine){
            console.log('am i online',navigator.onLine)
            fetchData(undefined,undefined,city)
        }else{
            console.log('fetch from local triggered')
            retrieveFromLocal()
        }

          
    },[])

    return (
        <>
        <header className="">
            <div className="Wrapper w-fit lg:w-full  h-full bg-gray-100">
                <div className="details flex flex-row flex-wrap items-center justify-evenly h-[60%] space-y-4 lg:space-y-0 py-7">
                  <DataBox ValueName={'Location'} imgUrl='/Map-pin.svg' value={fetchedData.Location}/>
                  <DataBox ValueName={'Temperature'} imgUrl='/temperature.svg' value={fetchedData.temperature}/>
                  <DataBox ValueName={'Wind speed'} imgUrl='/wind.svg' value={fetchedData.windSpeed}/>
                  <DataBox ValueName={'Pressure'} imgUrl='/pressure.svg' value={fetchedData.Pressure}/>
                  <DataBox ValueName={'Wind direction'} imgUrl='/direction.svg' value={fetchedData.WindDirection}/>
                </div>
                <div className="inputNote">

                </div>
            </div>
        </header>
        
        </>
    )
} 

export default weatherPage;