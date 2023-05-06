import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Info.css'
function Info() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="infoTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="infoTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.4<ArrowDownwardIcon className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="infoTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,215</span>
                    <span className="featuredMoneyRate">-11.4<ArrowUpwardIcon className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default Info