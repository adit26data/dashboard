import React from 'react'
import './Topbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">aditadmin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconsContainer">
                        <CircleNotificationsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <SettingsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbKH3dmV2jUeYJxKmNhUM9JfVMRbF29KqQg&usqp=CAU" alt="" className="topAvatar" />
                </div>
            </div>

        </div>
    )
}

export default Topbar