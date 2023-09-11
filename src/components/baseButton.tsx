import { ReactNode } from "react";

interface button {
    children:ReactNode
    extraClass:string
    url:string
}

function baseButton({children,extraClass,url}:button){
    return (
        <>
        <button
        onClick={() => window.location.href=url}
      className={"text-sm text-center rounded-full hover:shadow-md hover:shadow-[#443081]/50 transition duration-300" + extraClass}>
      {children}
    </button>
        </>
    )
}
export default baseButton;