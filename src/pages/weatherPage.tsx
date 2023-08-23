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
    // const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState<Props | any>({});
    const [fetchedNotes, setFetchedNotes] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState('');

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

    const handleSubmit = () => {
      fetchedNotes.unshift(inputValue);
      const stringData: string|any = localStorage.getItem('Notes');
      const Notes:string[] = JSON.parse(stringData || '[]');
      Notes.push(inputValue);
      localStorage.setItem('Notes', JSON.stringify(Notes));
      setInputValue('')
      
    };

    const handleRemoveNote = (Note:string)=>{
      const stringData: string|any = localStorage.getItem('Notes');
      const Notes:string[] = JSON.parse(stringData);

      const updatedSaveData:string[] = Notes.filter((item:string) => item !== Note);

      setFetchedNotes(updatedSaveData);
      localStorage.setItem('Notes', JSON.stringify(updatedSaveData));
    }

    const fetchNotes =()=>{
      const stringData: string|any = localStorage.getItem('Notes');
      const Notes:string[] = JSON.parse(stringData || '[]');
      setFetchedNotes(Notes);
    }

    const fetchData = async (lat?:number,long?:number,city?:string,) =>{
        const position = `${lat},${long}`
    
        try {
          const res = await axios.get(`http://api.weatherstack.com/current?access_key=73cd0bad295dcfb9b44fae586a412bb7&query=${city? city: position}`)
          console.log(res)
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
          fetchNotes()
        } catch (error) {
          console.log('just error')
          retrieveFromLocal()
          fetchNotes()
        }
      }
      useEffect(()=>{
        
      fetchData(undefined,undefined,city)    
    },[])

    return (
        <>
        <header className="">
            <div className="Wrapper w-fit lg:w-full  h-full bg-gray-300">
                <div className="details flex flex-row flex-wrap items-center justify-evenly h-[60%] space-y-4 lg:space-y-0 py-7">
                  <DataBox ValueName={'Location'} imgUrl='/Map-pin.svg' value={fetchedData.Location}/>
                  <DataBox ValueName={'Temperature'} imgUrl='/temperature.svg' value={fetchedData.temperature}/>
                  <DataBox ValueName={'Wind speed'} imgUrl='/wind.svg' value={fetchedData.windSpeed}/>
                  <DataBox ValueName={'Pressure'} imgUrl='/pressure.svg' value={fetchedData.Pressure}/>
                  <DataBox ValueName={'Wind direction'} imgUrl='/direction.svg' value={fetchedData.WindDirection}/>
                </div>
                <div className="Notes flex flex-row flex-wrap items-center justify-center md:justify-between px-6 py-4 bg-gray-300">
                  <div className='TEXTINPUT w-[80%] lg:w-[40%] flex flex-col items-center justify-center'>
                    <textarea className="w-full bg-white rounded-2xl px-6 py-4 h-[10rem] mb-4" placeholder='Add Notes...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className='px-4 hover:bg-gray-200 py-2 bg-sky-100 rounded-xl place-self-end' onClick={handleSubmit}>
                      Add Note
                    </button>
                  </div>
                  <div className='NOTES-LIST h-[15rem] lg:w-[50%] place-self-start flex flex-col items-center justify-center px-2 py-2 space-y-2'>
                    <div className='w-full h-[45rem] space-y-2 NOTES-SCROLL'>
                    {fetchedNotes.map((item:string, index:number) => (
                      <div key={index} className='flex flex-row hover:h-[10rem] items-center justify-between w-full px-4 py-2 rounded-lg bg-white'>
                        <h4 className='text-gray-500 max-w-[80%] bg-white'>
                          {item}
                        </h4>
                        <button className='px-2 hover:bg-gray-200 py-2 bg-sky-100 rounded-xl place-self-end' onClick={() => handleRemoveNote(item)}>
                          remove
                        </button>
                      </div>
                      ))}                        
                    </div>
                    
                  </div>
                </div>
            </div>
        </header>
        
        </>
    )
} 

export default weatherPage;