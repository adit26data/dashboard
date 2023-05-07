import React from 'react'
import './NewUser.css'
function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">
                New User
            </h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="jon snow" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="tel" placeholder="+91 9639725369" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder=" Winterfell,Westeros" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser