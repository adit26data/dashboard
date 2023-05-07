import React from 'react'
import './User.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhoneIcon from '@mui/icons-material/Phone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser"><button className="userAddButton">Create</button></Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                    </div>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Jon Snow</span>
                        <span className="userShowUserTitle">Software Engineer</span>

                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowInfoIcon' />
                            <span className="userShowInfoTitle">jon69@nothing</span>
                        </div>
                        <div className="userShowInfo">
                            <CelebrationIcon className='userShowInfoIcon' />
                            <span className="userShowInfoTitle">26/1/23</span>
                        </div>
                        <div className="userShowInfo">
                            <PhoneIcon className='userShowInfoIcon' />
                            <span className="userShowInfoTitle">+91 9639725369</span>
                        </div>
                        <div className="userShowInfo">
                            <ApartmentIcon className='userShowInfoIcon' />
                            <span className="userShowInfoTitle">Winterfell, Westeros</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowInfoIcon' />
                            <span className="userShowInfoTitle">jon@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="jon69"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Jon Snow"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="jon@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+91 9639725369"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Winterfell, Westeros"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <PublishOutlinedIcon className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User