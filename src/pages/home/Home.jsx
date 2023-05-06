import React from 'react'
import './Home.css'
import Charts from '../../components/charts/Charts'
import Info from '../../components/Info'
import { userData } from '../../dummyData'
import WidgetsSm from '../../components/widgets/WidgetsSm'
import WidgetsLg from '../../components/widgets/WidgetsLg'
function Home() {
    return (
        <div className='home'>
            <Info />
            <Charts title="User Analytics" data={userData} grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetsSm />
                <WidgetsLg />
            </div>
        </div>
    )
}

export default Home