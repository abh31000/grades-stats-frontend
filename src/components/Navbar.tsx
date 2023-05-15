import * as React from "react";

export default function Navbar():React.JSX.Element {
    return(
        <>
        <div className="navbar bg-white border-b-2 border-gray-200">
            <div className="flex-1">
               <a className="btn btn-ghost hover:bg-white normal-case">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.8278 34.4817L9.71411 14.5016C12.752 11.9311 22.2938 6.3149 26.5001 11.9233C29.5001 16.4473 23.8854 18.2582 21.5486 20.1277C24.7033 19.7772 30.0001 17.1277 32.1478 23.2648C33.5977 27.4077 23.2678 32.8459 18.8278 34.4817Z" fill="black" stroke="black"/>
                     <rect x="1.5" y="1.5" width="39" height="39" rx="8.5" stroke="black" stroke-width="3"/>
                  </svg>
               </a>
            </div>
            
            <div className="dropdown dropdown-left">
               <label tabIndex={0} className="btn btn-ghost sm:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 px-1">
                  <li><a>Accueil</a></li>
                  <li><a>Stastistiques</a></li>
               </ul>
               

               <div className="hidden px-1 sm:flex">
                  <ul className="">
                     <li className="btn mx-1 btn-ghost"><a>Accueil</a></li>
                     <li className="btn mx-1 btn-ghost"><a>Statistiques</a></li>
                  </ul>
               </div>
            </div>
         </div>
        </>
    )
}