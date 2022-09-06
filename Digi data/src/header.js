import React from "react";
import "./css/header.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
function Header({photoURL}){
    return(
        <div class ="header">
            <div className="header_logo">
            <img src="https://img.freepik.com/free-vector/cloud-network-technology-icon-neon-gradient-background_53876-119517.jpg?w=2000"></img> 
                <span>Digidata</span>

            </div>
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="Search "/>
                <FormatAlignCenterIcon/>

                
            </div>
            <div className="header_icons">
                <span>
                    <HelpCenterIcon/>
                    <SettingsIcon/>

                </span>
                <span>
                    <AppsIcon/>
                    <AccountBoxIcon src={photoURL}/>

                </span>
                
            </div>
        </div>
    )
}

export default Header