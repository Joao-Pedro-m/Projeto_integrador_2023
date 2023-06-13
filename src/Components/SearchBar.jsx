import React from 'react';
import SearchLogo from "../img/SearchLogo.svg";
export default function nome() {
    return (
            <>
                    <div className={"flex p-2 justify-center text-black h-12 w-[50%] bg-[#FFFFFF]"}  >
                        <input className={"text-black  w-[100%] h-[100%]"} type={"text"} />
                        <button >
                            <img className={"h-8"} src={SearchLogo}/>
                        </button>
                    </div>
            </>
    );
}
