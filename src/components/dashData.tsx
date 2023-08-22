import { useState } from 'react'
interface favProps {
    temperature: number;
    isDay: boolean;
    time: string;
    imgUrl: string;
    description: string;
    humidity: number;
    Location:string;
}
interface Props {
    temperature: number;
    isDay: boolean;
    time: string;
    imgUrl: string;
    description: string;
    humidity: number;
    Location:string;
    SearchCity: (message: string) => void;
}

function dashData({temperature,isDay,time,imgUrl,description,humidity,Location,SearchCity}:Props) {
    const [inputValue, setInputValue] = useState('');

    const handleEnterKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          // Call your function here
          SearchCity(inputValue);
        }
      };

      function saveToFavourites(){
        console.log('favouriting')
        const stringData: string | null = localStorage.getItem('favouriteData');
        const favouriteData:favProps[]|any = JSON.parse(stringData || '[]');

        const itemIndex = favouriteData.findIndex((item: { Location: string; }) => item.Location === Location);

        if (itemIndex !== -1) {
            favouriteData[itemIndex] = {
                Location,
                temperature,
                isDay,
                time,
                imgUrl,
                description,
                humidity
              };
        } else {
            favouriteData.push({
                Location:Location,
                temperature:temperature,
                isDay:isDay,
                time:time,
                imgUrl:imgUrl,
                description:description,
                humidity:humidity
              });
        }
        localStorage.setItem('favouriteData', JSON.stringify(favouriteData));
        window.location.reload()
    }
    return(
        <>
        
             <div className='SEARCH-BAR  relative flex flex-row items-center justify-center w-[70%] lg:w-[80%] lg:h-[2.5rem] pr-4 rounded-xl'>
                <svg className='w-8' width="16px" height="16px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#000000"/>
                </svg>
                <input type='text' className="w-full" placeholder='Search for cities...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleEnterKeyPress}/>
              </div>

              <div className='IMAGE w-[50%] flex flex-row justify-center items-center my-4'>
                
              {!imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src="/weather-svgrepo-com.svg"/>}
                {imgUrl && <img className="md:w-full md:h-full border rounded-full w-full h-full" src={imgUrl} />}
              </div>

              <div className='TEMPERATURE py-2 space-y-2 mb-2'>
                <h1 className="text-5xl lg:text-7xl">
                  {temperature}<sup>&deg;C</sup>
                </h1>
                <div className='DAY-&-TIME'>
                  <h4 className="text-lg">
                   <span className='text-gray-500'>{time}</span>
                  </h4>
                </div>
              </div>
              <div className='INFO-BOX  w-[70%]'>

                <div className='WEATHER-INFO flex flex-row items-center justify-center pt-4'>
                <svg width="38px" height="38px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M621.7 451.6m-129.5 0a129.5 129.5 0 1 0 259 0 129.5 129.5 0 1 0-259 0Z" fill="#F4CE26" />
                    <path d="M621.7 607.4c-85.9 0-155.8-69.9-155.8-155.8s69.9-155.8 155.8-155.8 155.8 69.9 155.8 155.8S707.6 607.4 621.7 607.4z m0-258.9c-56.8 0-103.1 46.2-103.1 103.1s46.3 103.1 103.1 103.1 103-46.3 103-103.2-46.2-103-103-103z" fill="#333333" />
                    <path d="M502.1 198c11.8-6.8 26.9-2.8 33.7 9l24.7 42.7c6.8 11.8 2.8 26.9-9 33.7-11.8 6.8-26.9 2.8-33.7-9l-24.7-42.7c-6.9-11.9-2.8-26.9 9-33.7zM807.8 406.4c3.5 13.2 17 21 30.2 17.4l47.6-12.8c13.2-3.5 21-17 17.4-30.2-3.5-13.2-17-21-30.2-17.4l-47.6 12.8c-13.1 3.5-20.9 17-17.4 30.2zM794.6 517.3c-3.5 13.2 4.3 26.7 17.4 30.2l47.6 12.8c13.2 3.5 26.7-4.3 30.2-17.4 3.5-13.2-4.3-26.7-17.4-30.2l-47.6-12.8c-13.1-3.5-26.6 4.3-30.2 17.4zM665.7 161.8c13.6 0 24.7 11 24.7 24.7v49.3c0 13.6-11 24.7-24.7 24.7-13.6 0-24.7-11-24.7-24.7v-49.3c0-13.6 11-24.7 24.7-24.7zM832.8 231.3c-9.6-9.6-25.2-9.6-34.9 0L763 266.2c-9.6 9.6-9.6 25.2 0 34.9 9.6 9.6 25.2 9.6 34.9 0l34.9-34.9c9.7-9.7 9.7-25.3 0-34.9z" fill="#333333" />
                    <path d="M264.5 740.8c-2.2 0.2-4.3 0.4-6.5 0.5-60.5 3.4-111-49.7-111-111s49.7-111 111-111c4.2 0 8.4 0.2 12.5 0.7-0.1-2.3-0.1-4.6-0.1-6.9 0-85.1 69-154.1 154.1-154.1 75.2 0 137.8 53.8 151.4 125 6.9-1.1 14-1.7 21.2-1.7 71.5 0 129.5 58 129.5 129.5-0.2 45.7-23.8 85.9-59.6 108.9-20.2 13-44.2 21.3-70 20.5-3.5-0.1-6.9-0.3-10.3-0.7-1.1 0.1-2.3 0.1-3.4 0.1H264.5z" fill="#FFFFFF" />
                    <path d="M252.4 767.8c-32.4 0-63.3-12.5-87.9-35.8-27.9-26.4-43.9-63.5-43.9-101.7 0-71.3 54.7-130.2 124.3-136.7 9.8-90.3 86.5-160.9 179.4-160.9 78.4 0 147 50.6 171.2 123.3h1.4c86 0 155.9 69.9 155.9 155.8 0 53.3-26.7 102.3-71.5 131.1-26.5 17.1-56.1 25.6-85.1 24.7-3.4-0.1-6.7-0.3-10-0.6-1 0-2 0.1-3 0.1H265.8c-2.1 0.2-4.2 0.4-6.3 0.5-2.4 0.1-4.7 0.2-7.1 0.2z m5.5-222.1c-46.6 0-84.6 38-84.6 84.6 0 23.8 10 46.9 27.4 63.4 15.7 14.9 35.7 22.5 55.7 21.2 1.7-0.1 3.5-0.2 5.2-0.4l2.8-0.2h324.9c2.8 0.3 5.6 0.5 8.4 0.6 23.2 0.8 42.8-8.5 54.9-16.4 29.8-19 47.5-51.4 47.5-86.7 0-56.8-46.3-103.1-103.1-103.1-5.7 0-11.4 0.5-16.9 1.4l-25.4 4.2-4.8-25.3c-11.5-60-64.2-103.6-125.5-103.6-70.5 0-127.8 57.3-127.8 127.8 0 1.9 0 3.8 0.1 5.7l1.4 30.9-30.7-3.5c-3.1-0.4-6.2-0.6-9.5-0.6z" fill="#333333" />
                </svg>
                  <h4 className="text-sm truncate-text">
                    {description}
                  </h4>
                </div>

                <div className='WEATHER-INFO flex flex-row items-center justify-center pt-2'>
                    <svg width="38px" height="38px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.857 13L12 19m-2.5-7l-.857 6m7.857-6l-.857 6M8 7.036a3.484 3.484 0 011.975.99M6 13.662A3.5 3.5 0 018.37 7.11a5.002 5.002 0 019.614 1.49 2.751 2.751 0 011.59 4.122"/>
                    </svg>
                    <h4 className="text-sm">
                      humidity - {humidity}
                    </h4>
                </div>
                <div className='LOCATION mt-4 flex flex-row items-center justify-center'>
                  <h4 className="text-xl truncate-text text-center">
                    {Location}
                  </h4>
                  <button className='w-fit px-4 rounded-full hover:bg-sky-700' onClick={() => saveToFavourites()}>
                  <svg className='z-99' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
                        <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"/>
                        </svg>
                  </button>
                </div>

            </div>
              

          
        </>)
}
export default dashData;