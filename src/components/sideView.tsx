import DashData from './dashData'
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
function sideView(Props:Props){
    return (
        <>
        <div className='UserNav bg-white w-full md:w-[28%] h-[100%] flex flex-col items-center justify-start py-6'>
            <DashData {...Props} />
          </div>
        </>
    )
}
export default sideView