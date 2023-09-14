import typeCapsule from "../types/typeCapsule";

export default interface popuptype {
    capsule:typeCapsule;
    showPopup:boolean;
    setPopup: (obj:typeCapsule) => void;
}