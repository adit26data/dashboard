import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetsSm.css'
function WidgetsSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Hanna Jefferson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/15591220/pexels-photo-15591220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Romi Mason</span>
                        <span className="widgetSmUserTitle">Software Architect</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/16524593/pexels-photo-16524593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Snow</span>
                        <span className="widgetSmUserTitle">Data Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/16332097/pexels-photo-16332097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jason Greyjoy</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetsSm