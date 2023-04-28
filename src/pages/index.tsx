
import {Inter} from 'next/font/google'
import Navbar from "../components/navbar";
import LeftSidebar from "../components/left_sidebar";
import RightSidebar from "../components/right_sidebar";
import MainPanel from "../components/main_panel";
import {useState} from "react";

const inter = Inter({subsets: ['latin']})




const words = [
    "abundant", "accord", "acquaintance", "acquisition", "alarm", "alliance",
    "ally", "ambition", "antique", "appeal", "arbitrary", "arise/arouse", "attorney",
    "balcony", "bargain", "behalf", "bid", "blend", "boast/boastful", "bold", "boom"
]

export default function Home() {
    const [location, set_location] = useState("recite")

    const navigation = [
        {name: 'Recite', href: '#', current: true, location_func: ()=> set_location("recite")},
        {name: 'Review', href: '#', current: false, location_func: ()=> set_location("review")},
    ]


    return (
        <div className="main-page h-screen max-h-screen">
            {/*global navbar*/}
            <Navbar navigation={navigation}/>

            <div className="flex items-stretch h-full pt-[3.4rem] max-h-full">
                {/* left sidebar for desktop */}
                <LeftSidebar/>

                {/* Dashboard content*/}
                <MainPanel func={location as any}/>

                {/* right sidebar */}
                <RightSidebar words={words}/>

            </div>


        </div>
    )
}
