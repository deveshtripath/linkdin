import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice"

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem=(topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
            <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who views you </p>
                     <p className="sidebar__statNumber">2560  </p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post </p>
                     <p className="sidebar__statNumber">2448  </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('programming')}
                {recentItem('software eng')}
                {recentItem('design')}
                {recentItem('developer')}
            </div> 
        </div>
    )
}

export default Sidebar
