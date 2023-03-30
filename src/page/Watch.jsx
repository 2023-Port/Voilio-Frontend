import React from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import Watch from "../component/Watch/Watch";

const WatchPage = () =>{
    return(
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar></Sidebar>
            </div>
            <div className='Board'>
                <Watch></Watch>
            </div>
            <div className='right-sidebar-box'>
                <InfoList></InfoList>
            </div>
        </div>
    );
};

export default WatchPage;