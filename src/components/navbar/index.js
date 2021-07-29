import React from 'react'
import {FiAirplay,FiCamera,FiSearch, FiBarChart} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import './style.css'


export default function NavBar(){
    return(
        <div className="top">
            <div className="leftSide">
                <ul>
                    <li id='menuIcon'><BiMenu size={38} color='#5773ff' /></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Podcast</a></li>
                    <li><a href="">Live</a></li>
                </ul>
            </div>
            <div className="middle">
                <input 
                    type="search" 
                    name="Search" 
                    id="search"
                    placeholder="Search For Music, Artist , Album..."
                />
            </div>
            <div className="rightSide">
                <div className="icon">
                    <div className="new"></div>
                    <a href="" id="searchIcon"><FiSearch/></a>
                    <a href="" id="ring"><FiAirplay/></a>
                    <a href=""><FiCamera/></a>
                </div>
                <button id="about">About Us</button>
            </div>
        </div>
    );
} 