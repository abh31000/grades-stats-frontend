import AboutPage from "./components/About/AboutPage";
import HowPage from "./components/How/HowPage";
import MainPage from "./components/MainPage/Main";
import Navbar from "./components/Navbars/Navbar";
import {useDisplay} from "./store/display"


export default function App() {
   const page = useDisplay((state:any) => state.page)
   
   return (
      <>
         { page ===0 ?
         <>
            <Navbar></Navbar>
            <MainPage></MainPage>
         </>
            : page === 1 ?
            <AboutPage></AboutPage>
            : page === 2 ?
            <HowPage></HowPage>
            : ""
         }
      </>
   );
}