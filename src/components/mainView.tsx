import City from "./city";
import FavouriteCity from "./favouriteCity";
import { useEffect, useState } from 'react'
import { topCitiesData } from './data';

interface Props{
    temperature:number;
    isDay:boolean;
    time:string;
    imgUrl:string;
    description:string;
    humidity:number;
    Location:string;
}

function mainView(){
    const [SavedData, setSavedData] = useState<Props[] | any>([]);
    const [favouritesData, setfavouritesData] = useState<Props[]>([]);

    function removeCity(city:string){

        const updatedSaveData:Props[] = SavedData.filter((item:Props) => item.Location !== city);

        setSavedData(updatedSaveData); // Update the state with the new array

        localStorage.setItem('LocalData', JSON.stringify(updatedSaveData))
        // window.location.reload()
    }

    function removeFavourite(city:string){

        const updatedSaveData:Props[] = favouritesData.filter((item:Props) => item.Location !== city);

        setfavouritesData(updatedSaveData); // Update the state with the new array

        localStorage.setItem('favouriteData', JSON.stringify(updatedSaveData))
        // window.location.reload()
    }

    function saveToFavourites(data:Props){
        favouritesData.unshift(data)
        // setIsLoading(true);
        const stringData: string | null = localStorage.getItem('favouriteData');
        const favouriteData: Props[] = JSON.parse(stringData || '[]');

        const itemIndex = favouriteData.findIndex(item => item.Location === data.Location);

        if (itemIndex !== -1) {
            favouriteData[itemIndex] = data;
        } else {
            favouriteData.push(data);
        }
        localStorage.setItem('favouriteData', JSON.stringify(favouriteData));
        // setIsLoading(false);
        window.location.reload()
    }

    function fetchSavedData(){
        const stringData:string|any = localStorage.getItem('LocalData')
        const LocalData:Props[] = JSON.parse(stringData);
        if (LocalData !== null) {
            setSavedData(LocalData)
        }else{
            localStorage.setItem('LocalData', JSON.stringify(topCitiesData));
        }
            const string:string|any = localStorage.getItem('favouriteData')
            const favouriteData:Props[] = JSON.parse(string);
            if (favouriteData !== null) {
                setfavouritesData(favouriteData)
            }
    }

    useEffect(()=>{
          
        // if (!navigator.onLine){
        //     fetchData(undefined,undefined,cityName)
            fetchSavedData()
        // }

     },[])


    return (
        <>
        <div className='HIGHLIGHTS w-full md:w-[68%] h-[100%] flex flex-col items-center justify-between opacity-80 backdrop-opacity-50'>

            <div className="Highlights-container h-fit w-full">

                <div className="heading flex pl-8 pt-4">
                    <h4 className="text-2xl">
                    Highlights
                    </h4>
                </div>
                <div className="FAVOURITE-CITIES flex flex-row items-center justify-center w-full mt-4">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                     <div className="CITIES-CONTAINER flex flex-row nowrap w-[90%] space-x-4">
                        {SavedData.sort().map((item:Props, index:number) => (
                            <City key={index} {...item} removeCity={removeCity} addTofavourites={saveToFavourites}/>
                        ))}
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                    <path d="M400-280v-400l200 200-200 200Z"/>
                    </svg>
                </div>

            </div>

            <div className="Favourites-container h-[45%] lg:h-[62%] w-full">
                
                { favouritesData.length !== 0 && <div className="FAVOURITE-CITIES flex flex-col items-center justify-center h-full w-full relative">
                    <div className="heading flex py-2 px-8 place-self-start top-0 absolute">
                        <h4 className="text-2xl">
                        Favourites
                        </h4>
                    </div>

                    <div className="FAVOURITE-CITIES-CONTAINER flex flex-row justify-center items-center h-full w-full flex-wrap w-[90%] space-x-2 md:space-x-4 py-8">
                        
                        {favouritesData.sort().map((item:Props, index:number) => (
                            <FavouriteCity key={index} {...item} removefavourite={removeFavourite}/>
                        ))}

                    </div>

                </div>}
                { favouritesData.length === 0 && <div className="h-full w-full flex flex-col items-center justify-center" >
                      <h4 className="text-2xl">
                        You have no favourites yet
                      </h4>
                      <img className="mt-4 border rounded-full w-[30%]" src="/weather-svgrepo-com.svg"/>
                </div>}

            </div>
            
        </div>
        </>
    )
}
export default mainView;