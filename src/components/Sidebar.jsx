import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EmailIcon from '@mui/icons-material/Email';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <AnalyticsIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">QuickMenu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonIcon className='sidebarIcon' />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <PaidIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <SummarizeIcon className='sidebarIcon' />
                            Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <AnalyticsIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <SummarizeIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar