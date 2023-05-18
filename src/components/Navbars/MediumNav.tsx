import { useState } from "react"

function Menu({handlestate}:any):React.JSX.Element {
    return(
        <>
        <div className="flex justify-between h-16 w-full bg-black">
            <div className="flex font-[Inter] select-none text-sm my-auto px-10 space-x-12 text-white">
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2">Accueil</h1>
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2">Statistiques</h1>
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2">Contact</h1>
            </div>
            <div onClick={handlestate} className="py-[21px] cursor-pointer px-14">
                <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="29" y2="1" stroke="white" strokeWidth="1.7"/>
                    <line y1="8" x2="29" y2="8" stroke="white" strokeWidth="1.7"/>
                    <line y1="15" x2="29" y2="15" stroke="white" strokeWidth="1.7"/>
                </svg>
            </div>
        </div>
        </>
    )
}

export default function MediumNav():React.JSX.Element {
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        if(menu === false){setMenu(true)}
        else {setMenu(false)}
    }
    
    return(
        <>
        {menu === false ?
        <div className="flex justify-between h-16 w-full font-[Inter] select-none pl-10 border-b-[3px] border-black">
            <div className="h-fit w-fit py-2">
                <svg className="block" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.8278 34.4817L9.71411 14.5016C12.752 11.9311 22.2938 6.3149 26.5001 11.9233C29.5001 16.4473 23.8854 18.2582 21.5486 20.1277C24.7033 19.7772 30.0001 17.1277 32.1478 23.2648C33.5977 27.4077 23.2678 32.8459 18.8278 34.4817Z" fill="black" stroke="black"/>
                     <rect x="1.5" y="1.5" width="39" height="39" rx="8.5" stroke="black" strokeWidth="3"/>
                </svg>
            </div>

            <div onClick={handleMenu} className="bg-black py-[21px] px-14 cursor-pointer">
                <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="29" y2="1" stroke="white" strokeWidth="1.7"/>
                    <line y1="8" x2="29" y2="8" stroke="white" strokeWidth="1.7"/>
                    <line y1="15" x2="29" y2="15" stroke="white" strokeWidth="1.7"/>
                </svg>
            </div>
        </div>
        :
        <Menu handlestate={handleMenu}></Menu>
        }
        </>
    )
}