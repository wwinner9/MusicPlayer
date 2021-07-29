import React,{useState,useEffect}from 'react';
import {FaHeart, FaRegPlayCircle} from 'react-icons/fa'
import {BiCaretRightSquare,BiRepost,BiSkipPrevious,BiSkipNext,BiPlay,BiPause} from 'react-icons/bi'
import {FiShuffle} from 'react-icons/fi'
import './style.css'
import SideBar from '../sidebar/index'
import NavBar from '../navbar/index'
import juicImg from '../../assets/juicy1.jpg'
import banner from '../../assets/fotobanner.jpg'
import nga1 from '../../assets/nga1.jpg'
import nga2 from '../../assets/nga2.jpg'
import prodi from '../../assets/prod.jpg'
import trex from '../../assets/toy.jpg' 
import SongAn from '../../assets/equalizer.gif'
import xxtent from '../../assets/xxtent.jpg'  


export default function Main(){

    
    /*
    const {artists,setArtists} = useState([])


    useEffect(()=>{
        async function loadApi(){
            let response = await apiAudiomack.get('artist/27')
    
            console.log(response)
        }

        loadApi()
    },[])

    */

    


    function handlePlay(e){
        let handled= e.target

        console.log(document.querySelector('.playControl'))

        if(handled.classList.contains('pauseControl')){
            handled.style.display='none'
            document.querySelector('.playControl').style.display='flex'
            document.querySelector('#songGif').style.display='none'

        }else if(handled.classList.contains('playControl')){
            handled.style.display='none'
            document.querySelector('.pauseControl').style.display='flex'
            document.querySelector('#songGif').style.display='flex'

        }
    }

    return(
        <div className="mainContainer"> 
            <div className="sideleft">
                <SideBar/> 
            </div>
                  
            
            <div className="mainCenterContent">
                <header>
                    <div className="mainTop">
                        <NavBar/>
                    </div>
                    <div className="mainBase">
                        <div className="legendSide">                           
                            <p>Tranding New Hits</p>
                            <div className="mainMusicContent">
                                <ul>
                                    <li>
                                        <h1 id='legendMusicName'>Joselyn Flores</h1>
                                        <div className="legendArtist">
                                            <p><strong id='legendArtistName'>XxXtentacion</strong></p>
                                            <p id='listen'>30.0k Listen</p>
                                        </div>
                                    </li>
                                </ul>  
                                <div className="btnAboveLegend">
                                    <button id='btnListen'> Listen Now</button>  
                                    <button id='btnFavorite'><FaHeart size={14}/></button>  
                                </div>
                            </div>                    

                        </div>
                        <div className="photoSide"></div>\        
                    </div>
                </header>

                <section id='musicStreaming'>
                    <div className="topArtists">
                        <div className="artist">
                            <div className="top">
                                <p>Top Artists</p>
                                <p>See All</p>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <img src={trex} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li> 

                                    <li>
                                        <img src={juicImg} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li>

                                    <li>
                                        <img src={nga2} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li>

                                    <li>
                                        <img src={trex} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li>
                                    <li>
                                        <img src={nga1} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li> 
                                    <li>
                                        <img src={prodi} alt="Image of the Artist" className='artistImg'/>
                                        <p><strong>Juicy Wrld</strong></p>
                                    </li>                               
                                
                                </ul>
                            </nav>
                        </div>

                        <div className="playerPlaylist">
                            <div className="playlistContent">
                                <div className="topPlaylist">
                                    <div className="topInfo">
                                        <p>Playlist</p>
                                        <p>Mix Yuri-Py Jr</p>
                                    </div>
                                    <div className="playIcon">
                                        <FaRegPlayCircle/>
                                    </div>                                   
                                </div>
                                <div className="playListMusic">
                                    <ul>
                                    <li> 
                                            <div className="playlistLeft"> 
                                                <img src={nga2} alt="image of the Music"/>
                                                <div className="artistMusicInfoPlaylist">
                                                    
                                                    <p id='musicName'>Shadow</p>
                                                    <p id='artist'><strong>Juicy Wrld</strong></p>
                                                </div> 
                                            </div>
                                            <div className="playlistRight">
                                                <p id='timer'>02:57</p>
                                                <p id='favorite'><BiCaretRightSquare color='#fff' size={20}/></p>
                                            </div>
                                        </li>

                                        <li> 
                                            <div className="playlistLeft"> 
                                                <img src={xxtent} alt="image of the Music"/>
                                                <div className="artistMusicInfoPlaylist">
                                                    
                                                    <p id='musicName'>MoonLight</p>
                                                    <p id='artist'><strong>Xxtentacion</strong></p>
                                                </div> 
                                            </div>
                                            <div className="playlistRight">
                                                <p id='timer'>03:57</p>
                                                <p id='favorite'><BiCaretRightSquare color='#fff' size={20}/></p>
                                            </div>
                                        </li>
                                        

                                        <li> 
                                            <div className="playlistLeft"> 
                                                <img src={juicImg} alt="image of the Music"/>
                                                <div className="artistMusicInfoPlaylist">
                                                    
                                                    <p id='musicName'>I meet Her</p>
                                                    <p id='artist'><strong>Xxtentacion</strong></p>
                                                </div> 
                                            </div>
                                            <div className="playlistRight">
                                                <p id='timer'>03:57</p>
                                                <p id='favorite'><BiCaretRightSquare color='#fff' size={20}/></p>
                                            </div>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="playerContent">
                                <div className="musicInfoPlayer">
                                    <div className="leftMusicPlayerSide">

                                        <h4>Player</h4>
                                        <div className="playInfoConcret">
                                            <img src={xxtent} alt="image of the Music"/>
                                            <div className="infoMusicPlaying">
                                                <p>NGA</p>
                                                <p>Quando o Kumbu Cair</p>
                                            </div> 
                                        </div>
                                       
                                    </div>
                                    
                                    <div className="imgPlus">
                                        <img src={SongAn} id='songGif' alt="image of the Music that is playing"/> 
                                    </div>

                                </div>
                                <div className="playerControls" onClick={handlePlay}>
                                    <div className="controls">
                                        <BiRepost/>
                                        <BiSkipPrevious/>
                                        <div className="pauseControl" >
                                            <BiPause/>                                            
                                        </div> 
                                        <div className="playControl">
                                            <BiPlay/>
                                        </div>                                       
                                        <BiSkipNext/> 
                                        <FiShuffle/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                    
                    <div className="mostPopularMusic">
                        <h3>Most Popular</h3>
                        <h4>120 songs</h4>
                        <ul>  

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={juicImg} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>

                            <li>
                                <p id='musicNumber'>1</p>
                                <img src={xxtent} alt="image of the Music"/>
                                <p id='artist'><strong>Xxtentacion</strong></p>
                                <p id='musicName'>MoonLight</p>
                                <p id='timer'>03:57</p>
                                <p id='favorite'><FaHeart/></p>
                            </li>
                        </ul>
                    </div> 
                </section>
                
            </div> 
        </div>
    );
}