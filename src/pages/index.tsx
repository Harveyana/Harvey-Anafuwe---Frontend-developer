import Nav from '../components/Nav';
import Banner from '../components/banner';
// import { useEffect, useState } from 'react'
import SkeletonLoader from '../components/skeletonLoader';
import Capsules from '../components/capsules';
import '../App.css'
// import myCapsules from '../models/myCapsules';
import { typeCapsule } from "../types/typeCapsule";
import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import Capsule from '../components/capsule';



interface bob {
  data: typeCapsule[][];
  pageData: typeCapsule[];
  popup: boolean;
}


class index extends Component{

  state:bob = {
    data: [],
    pageData: [],
    popup: false
  };

  
  setpage = (number:number) => {
    this.setState({ pageData: this.state.data[number-1] });
  };

  setPopup = ()=>{
    if(this.state.popup)this.setState({ popup: false });
    else{this.setState({ popup: true })}
    window.scrollTo({
      top: 0
    });
  }


  async divideAndMap(data:any[]) {
    const chunkSize = 8;
    const response = data.reduce((result: any[][], item: any, index: number) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }

      result[chunkIndex].push(item);
      return result;
    }, []);
    this.setState({ data: response});
    this.setpage(1)
    this.setState({ pageData: response[0] });
    console.log(this.state.pageData)
  }
  
  componentDidMount() {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(`https://api.spacexdata.com/v4/capsules`);
        this.divideAndMap(response.data)
        console.log(response.data)
        return response.data;
      } catch (error) {
        console.error('API Error:', error);
      }
    }

    fetchData()
      
  }
   
  
  render() {
    const { data,pageData,popup }:bob = this.state;

    const numberOfComponents = data.length
    const componentArray = Array.from({ length: numberOfComponents });

   return (
    <>
    <div className="w-full">
      <Nav/>
      <Banner/>
      <section id="mainSection" className="w-full pb-8">
        <div className='relative grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto overfloww-hidden'>
        <form action="" className='w-full col-span-12 md:col-span-5 grid grid-cols-12 gap-4'>
          {/* <label for="cars">Choose a car:</label> */}
          <select id="cars" name="cars" className='col-span-5 input rounded-xl py-3 px-4 bg-gray-100'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saabjhcjsjvkjsv</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="search" id="inputFilter" placeholder='filter directory' name="inputFilter" className='col-span-7 input rounded-xl px-4 bg-gray-100'/>
          <input type="search" id="inputSearch" placeholder='enter search term' name="inputSearch" className='col-span-8 input rounded-xl px-4 bg-gray-100 py-3'/>
          <input type="submit" id="inputSearch" name="inputFilter" className='col-span-4 input border-[0.2px] border-[#443081] border border-[#443081] rounded-xl px-4 bg-gray-100 py-3'/>
        </form>
        </div>
      </section>
      <section className='w-full pb-12'>
        {!pageData.length && <SkeletonLoader/>}
        {<div className='grid grid-cols-12 gap-4 px-4 sm:px-8 mx-auto over-flow-hidden'>
        {pageData.length && pageData.map((item:typeCapsule, index:number) => (
          <Capsule key={index} {...item} ShowPopup={this.setPopup}/>
          ))}
        </div>
        }
      </section>
      <section className="w-full pb-8">
        <ul className='grid grid-cols-6 md:grid-cols-12 gap-2 px-6 md:px-12'>
            {componentArray.map((_, index) => (
            <li className='cols-span-1 w-full' key={index}>
              <button onClick={() => this.setpage(index+1)} className="w-full rounded-xl bg-gray-200 hover:bg-[#D08F24] focus:border-2 focus:border-black hover:text-black py-2 text-xs">
                {index+1}
              </button>
            </li>
            ))}
        </ul>
      </section>
      {popup && <section className='w-full pb-8 flex flex-row items-center justify-center'>
        <div className='w-[90%] md:w-[35%] popup '>
          <div className='grid grid-cols-12 gap-4 shadow-lg shadow-black w-full rounded-xl py-2 bg-white'>
            <img src='./img/spaceShuttle.svg' className="rounded-lg col-span-12 md:col-start-2 md:col-span-10 bg-slate-100 md:h-40 w-full"/>
            <div className='col-span-12 md:col-start-2 md:col-span-10 grid grid-cols-6 gap-4 px-2'>
              <div className="col-span-6 grid grid-cols-6 gap-4 px-2">
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Serial:<span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>cjerf</span> </h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Status: <span className={`${status === 'active' ? 'bg-green-900': 'bg-red-900'} px-2 py-1 rounded-lg text-white`}>Active</span></h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Launches: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>3</span></h1>
                  <h1 className="col-span-3 md:col-span-4 lg:col-span-2 text-left text-xs">Type: <span className='bg-gray-300 px-2 py-1 rounded-lg text-black'>region</span></h1>
                  <h1 className="col-span-6 lg:col-span-6 text-left text-xs">The spaceship went well but i dont think it was gonna pay off at the end of the day</h1>
              </div>
              <button onClick={() => this.setPopup()} className="col-span-2 w-[80%] rounded-xl bg-black hover:bg-[#D08F24] focus:border-2 focus:border-black hover:text-black text-white py-2 text-xs">
                Close
              </button>
            </div>
          </div>
        
        </div>
      </section>}
      
    </div>
    
    </>
  )
 }

 
}

export default index
  
