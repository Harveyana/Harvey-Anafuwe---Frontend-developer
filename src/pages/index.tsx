import Nav from '../components/Nav';
import Banner from '../components/banner';
import '../App.css'
import myCapsules from '../models/myCapsules';
import typeCapsule from "../types/typeCapsule";
import indexState from "../types/indexState"
import { Component,FormEvent,ChangeEvent } from 'react';
import data from '../components/data';
import Popup from '../components/popup';
import Form from '../components/form';
import Pagination from '../components/pagination';
import DataGrid from '../components/dataGrid';

class index extends Component{

  state:indexState = {
    data:[],
    chunkedData: [],
    pageData: [],
    popup: false,
    inputSearch: '',
    inputFilter: 'status',
    popupData: data,
    instance: null
  };

  
  setpage = (number:number) => {
    this.setState({ pageData: this.state.chunkedData[number-1] });
    console.log(this.state.pageData)

  };

  setPopup = (data:typeCapsule)=>{
    this.setState({ popupData: data });
    if(this.state.popup)this.setState({ popup: false });
    else{this.setState({ popup: true })}
    window.scrollTo({
      top: 0
    });
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredResults = this.state.data.filter((item:any) =>
      item[this.state.inputFilter].toLowerCase().includes(this.state.inputSearch.toLowerCase())
    );
    console.log(filteredResults)
    if(filteredResults.length){
      const mapped:any = this.state.instance.divideAndMap(filteredResults)
      console.log(mapped)
      this.setState({ chunkedData: mapped});
        
      this.setState({ pageData: mapped[0]});
    }
    
  };

  reset = () => {
    this.setState({ inputSearch: ''});
    const result:any = this.state.instance.divideAndMap(this.state.data)

    this.setState({ chunkedData: result});
        
    this.setState({ pageData: result[0]});
  }

  async componentDidMount() {
    const instance = new myCapsules()
    this.setState({ instance: instance})
    const response:any = await instance.fetchData()

    this.setState({ data: response })

    const result:typeCapsule[][] = instance.divideAndMap(response)

    this.setState({ chunkedData: result});
        
    this.setState({ pageData: result[0]});

  }
   
  
  render() {
    const { pageData,chunkedData,popupData,inputFilter,inputSearch }:indexState = this.state;

   return (
    <>
    <div className="w-full">
      <Nav/>
      <Banner/>
      <Form reset={this.reset} inputFilter={inputFilter} inputSearch={inputSearch} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
      <DataGrid pageData={pageData} setPopup={this.setPopup}/>
      <Pagination chunkedData={chunkedData} setPage={this.setpage}/>
      <Popup showPopup={this.state.popup} setPopup={this.setPopup} capsule={popupData} />
    </div>
    
    </>
  )
 }
}

export default index
  
