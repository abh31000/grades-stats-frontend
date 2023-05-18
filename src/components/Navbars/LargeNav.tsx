import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Contact({handlestate}:any):React.JSX.Element {
    return(
        <>
        <div className="flex px-10 justify-between h-16 w-full text-white text-sm select-none font-[Inter] font-medium bg-black">
            <div className="flex shrink my-auto space-x-12">
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2 ">Email: example@gmail.com</h1>
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2 ">Telegram: loukablouka</h1>
                <h1 className="cursor-pointer hover:underline hover:underline-offset-2 ">Phone: +213 0678 9875</h1>
            </div>
            <div onClick={handlestate} className="flex cursor-pointer py-5 space-x-1">
                <h1>Contact</h1>
                <svg className="mt-[2px]" width="8" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00022 7C7.44794 6.99988 7.00012 7.44749 7 7.99978C6.99987 8.55206 7.44749 8.99988 7.99977 9L8.00022 7ZM8.70695 8.70727C9.09756 8.31683 9.0977 7.68367 8.70727 7.29305L2.34474 0.927659C1.95431 0.537047 1.32114 0.536904 0.930529 0.92734C0.539916 1.31778 0.539773 1.95094 0.930209 2.34155L6.58579 7.99968L0.927659 13.6553C0.537047 14.0457 0.536904 14.6789 0.927341 15.0695C1.31778 15.4601 1.95094 15.4602 2.34155 15.0698L8.70695 8.70727ZM7.99977 9L7.99978 9L8.00023 7L8.00022 7L7.99977 9Z" fill="#FFFAF9"/>
                </svg>
            </div>
        </div>
        </>
    )
}


export default function LargeNav():React.JSX.Element {
    const [contact, setContact] = useState(false)

    function handleContact() {
        if(contact === false) {setContact(true)}
        else {setContact(false)}
    }

    useEffect(()=>{
        //console.log(contact)
    })
    
    return(
        <>
        <div className="overflow-hidden">
        {contact === false ?
        <div className="flex justify-between h-16 w-full text-sm font-[Inter] select-none pl-10 border-b-[3px] border-black">
            <div className="h-fit w-fit py-2">
                <svg className="block" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.8278 34.4817L9.71411 14.5016C12.752 11.9311 22.2938 6.3149 26.5001 11.9233C29.5001 16.4473 23.8854 18.2582 21.5486 20.1277C24.7033 19.7772 30.0001 17.1277 32.1478 23.2648C33.5977 27.4077 23.2678 32.8459 18.8278 34.4817Z" fill="black" stroke="black"/>
                     <rect x="1.5" y="1.5" width="39" height="39" rx="8.5" stroke="black" strokeWidth="3"/>
                </svg>
            </div>

            <div className="flex h-ful font-medium space-x-5">
                <div className="flex space-x-5">
                    <h1 className="py-5 px-5 cursor-pointer">Accueil</h1>
                    <h1 className="py-5 px-5 cursor-pointer">Statistiques</h1>
                </div>
                <h1 onClick={handleContact} className="bg-black py-5 px-10 text-white cursor-pointer">Contact</h1>
            </div>
        </div>
        :
        <Contact handlestate={handleContact}></Contact>
        }
        </div>
        </>
    )
}