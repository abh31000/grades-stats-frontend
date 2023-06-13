import {useDisplay} from "../../store/display"


export default function AboutPage():React.JSX.Element {
    const setPage = useDisplay((state:any) => state.setPage)
    
    return(
        <>
            <div className="font-[Inter] text-[118px] font-light h-[30vh] select-none bg-black text-white ">
                <div onClick={() => setPage(0)} className="flex cursor-pointer w-fit h-full">
                    <svg className="my-auto ml-8 mr-5" width="30" height="52" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99921 22.5C5.93221 22.4996 7.49957 24.0662 7.5 25.9992C7.50044 27.9322 5.93379 29.4996 4.00079 29.5L3.99921 22.5ZM1.52568 28.4754C0.15854 27.1089 0.15804 24.8928 1.52457 23.5257L23.7934 1.2468C25.1599 -0.12034 27.376 -0.12084 28.7432 1.24569C30.1103 2.61222 30.1108 4.82829 28.7443 6.19543L8.94975 25.9989L28.7532 45.7934C30.1203 47.1599 30.1208 49.376 28.7543 50.7432C27.3878 52.1103 25.1717 52.1108 23.8046 50.7443L1.52568 28.4754ZM4.00079 29.5L4.00079 29.5L3.99921 22.5L3.99921 22.5L4.00079 29.5Z" fill="white"/>
                    </svg>
                    <h1 className="my-auto">Sur ce projet</h1>
                </div>
            </div>
        </>
    )
}