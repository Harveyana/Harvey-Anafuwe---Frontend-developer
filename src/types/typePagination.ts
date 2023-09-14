import typeCapsule from "../types/typeCapsule";

export default interface typePagination {
    chunkedData:typeCapsule[][];
    setPage:(index:number) => void;
}