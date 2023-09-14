import axios, { AxiosResponse } from 'axios';
export default class myCapsules {
    List: any[];

    constructor() {
        // this.fetchData()
        this.List = []
    }

     async fetchData() {
        try {
          const response: AxiosResponse = await axios.get(`https://api.spacexdata.com/v4/capsules`);
          return response.data;
        } catch (error) {
          console.error('API Error:', error);
        }
    }

    divideAndMap(data:any[]) {
      const chunkSize = 8;
    const result: any[][] = [];
      data.forEach((item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
    
        if (!result[chunkIndex]) {
          result[chunkIndex] = [];
        }
    
        result[chunkIndex].push(item);
    
      });
      return result;
    }

}