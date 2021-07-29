import React ,{useState} from 'react'
import {FaGoogle,FaGithub, FaMusic} from 'react-icons/fa'
import './style.css'
import api from '../../services/api'

export default function Login({history}){

    const [email,setEmail]= useState('');

    //async function through using an api Call
    async function handleSubmit(e){
        //Prevent the default event of the form submit
        e.preventDefault();

        //response of the api await is there to wait till the get methods return us an response from the api
        const res = await api.get(email);

        //Destructuring the info coming from the api that is an object containning a prop called data where is all our github info 
        const {avatar_url,name,em=email} = res.data

        // Avatar
        //Nmae
        //Bios
        //email 

        localStorage.setItem('image', avatar_url)
        localStorage.setItem('name', name)
        localStorage.setItem('email', em)

        history.push('/main')
    }

    return(

        <div className='container'>

            <div className="content">
                
                <header>
                    <img src="" alt=""/>
                    <FaMusic size={30} color='#d9d9d9'/>
                    <p>Sign In</p>
                    <div className="networks">
                        <FaGithub size={20}  id='gitHub'/>
                        <FaGoogle size={20}  id='google'/>
                    </div>
                </header>
                <section>
                    <form action="" id="loginForm" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username *</label>
                        <input 
                            type="text" 
                            name="" 
                            id="userName"
                            placeholder="Digite seu Usuario no GitHub"
                            onChange= {e=> setEmail(e.target.value)}
                            value={email}
                        />
                        <button className="btnSubmit" type="submit">Conectar</button>
                    </form>
                    <p className="pCenter">
                        Um Player a Sua Altura <br/>
                        Musicas Nacionais <br/>
                        Internacionais <br/>
                        Para Ti Dev <br/>
                    </p>

                </section>

            </div>

        </div>
    );
}