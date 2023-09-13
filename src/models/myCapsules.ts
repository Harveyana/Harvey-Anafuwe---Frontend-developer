import axios, { AxiosResponse } from 'axios';
export default class myCapsules {
    List: any[];

    constructor() {
        this.fetchData()
        this.List = []
    }

     async fetchData() {
        try {
          const response: AxiosResponse = await axios.get(`https://api.spacexdata.com/v4/capsules`);
          // this.divideAndMap(response.data)
          return response.data;
          // console.log('API Data:', this.List);
        } catch (error) {
          console.error('API Error:', error);
        }
    }

    async divideAndMap(data:any[]) {
      const chunkSize = 8;
       const response = data.reduce((result: any[][], item: any, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);
  
        if (!result[chunkIndex]) {
          result[chunkIndex] = [];
        }
  
        result[chunkIndex].push(item);
        console.log(result)
        return result;
      }, []);
      this.List = response
      console.log(this.List)
      return response
    }
  
    // getLength() {
    //   return this.List.length
    // }
}