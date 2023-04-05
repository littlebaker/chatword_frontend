
import {Inter} from 'next/font/google'
import Navbar from "../components/navbar";
import LeftSidebar from "../components/left_sidebar";
import RightSidebar from "../components/right_sidebar";
import MainPanel from "../components/main_panel";

const inter = Inter({subsets: ['latin']})


const navigation = [
    {name: 'Recite', href: '#', current: true},
    {name: 'Review', href: '#', current: false},
]

const words = [
    "abundant", "accord", "acquaintance", "acquisition", "alarm", "alliance",
    "ally", "ambition", "antique", "appeal", "arbitrary", "arise/arouse", "attorney",
    "balcony", "bargain", "behalf", "bid", "blend", "boast/boastful", "bold", "boom"
]

export default function Home() {
    return (
        <div className="main-page h-screen max-h-screen">
            {/*global navbar*/}
            <Navbar navigation={navigation}/>

            <div className="flex items-stretch h-full pt-[3.4rem] max-h-full">
                {/* left sidebar for desktop */}
                <LeftSidebar/>

                {/* Dashboard content*/}
                <MainPanel/>

                {/* right sidebar */}
                <RightSidebar words={words}/>

            </div>


        </div>
    )
}
