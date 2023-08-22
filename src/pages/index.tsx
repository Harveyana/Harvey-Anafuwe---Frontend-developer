import { useEffect, useState } from 'react'
import axios from 'axios'
import SideView from '../components/sideView'
import MainView from '../components/mainView'
import Alert from '../components/showAlert'
import LoadingState from '../components/loading'
import '../App.css'

function index() {
  interface searchProp{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string
}
  interface Props{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string
    SearchCity: (message: string) => void;
}
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [fetchedData, setFetchedData] = useState<Props | any>({});

  const saveSearch = (data:searchProp)=>{      
      localStorage.setItem('search', JSON.stringify(data));
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
        humidity:res.data.current.humidity
      })
      saveSearch({
        Location:`${res.data.location.name}, ${res.data.location.country}`,
        temperature: res.data.current.temperature,
        isDay:res.data.current.is_day,
        time:res.data.location.localtime,
        imgUrl:res.data.current.weather_icons[0],
        description:res.data.current.weather_descriptions[0],
        humidity:res.data.current.humidity
      })
      console.log(isLoading)
    } catch (error) {
      setIsLoading(false);
      setFetchedData({
        temperature: 26,
        isDay: true,
        time: '4:30 PM',
        imgUrl: 'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png',
        description: 'Warm and Humid',
        humidity: 75,
        Location: 'Lagos, Nigeria'
      })
      console.log(error)
    }
  }

  const SearchForCity = (city:string)=>{
    console.log('search was triggered',city)
    fetchData(undefined, undefined, city);
  }

  useEffect(()=>{
    
    const fetchUserLocation = ()=>{
      const successCallback = (position:any) => {
        const data = { latitude: position.coords.latitude, longitude: position.coords.longitude };
        console.log(position.coords.latitude);
        console.log(position.coords.longitude)
        localStorage.setItem('Location', JSON.stringify(data));

      };
      
      const errorCallback = (error:any) => {
        console.log(error);

      };

      const stringData:string|any = localStorage.getItem('Location')
      const savedLocation:{latitude:number;longitude:number} = JSON.parse(stringData);
      if (savedLocation !== null) {
        console.log('Value exists:', savedLocation);
        fetchData(savedLocation.latitude,savedLocation.longitude)
      } else {
        console.log('Value does not exist');
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        setAlert(true)
      }
      
    }
    const fetchedSavedData =()=>{
      const stringData:string|any = localStorage.getItem('search')
        const searchData:Props = JSON.parse(stringData);
        if (searchData !== null) {
          setFetchedData(searchData)
          fetchUserLocation()
        }else{
          fetchUserLocation()
        }
    }

    fetchedSavedData()

  },[])

//   const data:{
//     temperature:number;
//     isDay:boolean;
//     time:string;
//     imgUrl:string;
//     description:string;
//     humidity:number;
// } = {
//     temperature: 23,
//     isDay:true,
//     time:'12:30',
//     imgUrl:'just this',
//     description:'cloudy',
//     humidity:34
// }
  return (
    <>
    <header className='flex flex-col justify-center items-center border'>
      <div className='CONTAINER w-screen flex flex-col items-center justify-center md:h-screen border relative' >
        
         
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-300 h-full w-full py-2">
         
          <SideView {...fetchedData} SearchCity={SearchForCity} />

          <MainView />
        </div>

        <Alert showAlert={showAlert} toggleAlert={setAlert}/>
      </div>
      <LoadingState showLoading={isLoading} />
    </header>
    
    </>
  )
}

export default index
