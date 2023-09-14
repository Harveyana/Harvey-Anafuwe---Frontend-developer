import typeCapsule from "./typeCapsule";
export default interface indexState {
    popupData: typeCapsule;
    data: typeCapsule[];
    chunkedData: typeCapsule[][];
    pageData: typeCapsule[];
    popup: boolean;
    inputSearch: string;
    inputFilter: string
    instance:any
  }