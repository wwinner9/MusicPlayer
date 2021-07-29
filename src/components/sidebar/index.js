import React from 'react';
import {FiHome,FiImage,FiGlobe,FiUser,FiVideo,FiClock,FiFile, FiSettings, FiLogOut } from 'react-icons/fi'
import './style.css' 



export default function SideBar(){

     const imgUser=localStorage.getItem('image')
     const userName=localStorage.getItem('name')
     const userEmail=localStorage.getItem('email')


    return(
        <>
            <main id="leftSide">
                <header>
                    <div className="userAvatar">
                        <img src={imgUser} id='uAvatar' alt=""/>
                    </div>
                    <div className="userInfo">
                        <p><strong>{userName}</strong></p>
                        <p>{userEmail}</p>
                    </div>
                </header>

                <section id="menu">
                    <nav>
                        <ul>
                            <li><FiHome className='icon' size={18} /><a href="">Home</a></li>
                            <li><FiGlobe className='icon' size={18} /><a href="">Browse</a></li>
                            <li><FiImage className='icon' size={18} /><a href="">Album</a></li>
                            <li><FiUser className='icon' size={18} /><a href="">Artists</a></li>
                            <li><FiVideo className='icon' size={18} /><a href="">Videos</a></li>
                        </ul>
                    </nav>
                    <article>
                        <p>MY MUSIC</p>
                        <div className="musicsOp">
                            <ul>
                                <li><FiClock className='icon' size={18} /><a href="">Recently Played</a></li>
                                <li><FiFile className='icon' size={18} /><a href="">Playlist</a></li>
                            </ul> 
                        </div>
                    </article>
                </section>
                <footer>
                    <article>
                        <p>GENERAL</p>
                        <div className="musicsOp">
                            <ul>
                                <li><FiSettings className='icon' size={18} /><a href="">Setings</a></li>
                                <li><FiLogOut className='icon' size={18} /><a href="">Log Out</a></li>
                            </ul> 
                        </div>
                    </article>
                </footer>
            </main>        
        </>
    );
}