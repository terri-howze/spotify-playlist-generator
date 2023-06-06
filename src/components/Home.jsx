import React, { useState, useEffect } from "react";
import { devAuthState } from "../recoil_state";
import { useRecoilState } from "recoil";
import axios from "axios";

const Home = () => {
    const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const redirect_uri =  "http://localhost:5173/"
    const authUrl =`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
    const setDevAuthState = useRecoilState(devAuthState);
    const [count, setCount] = useState("");

    const devAuth = () => {
        
        axios
        .get('http://localhost:3001/login', { 
        }).then(() =>{
        console.log(code)
        }).catch(err =>{
        console.log(err)
        })
    }


    return(
        <>
        <div className = "h-screen w-full bg-[url('/images/background.jfif')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className = "font-mono text-4xl font-bold underline flex justify-center" >
            Weather app
            </div>
            <div className = "flex justify-center">
            <div className="bg-black px-16 py-16 mt-2 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                <form>
                <label htmlFor="song" className = "text-white font-mono text-2xl">Song</label>
                <input type="text" id="song" name="songName"/>
                </form>
                <button className="bg-teal-600" onClick={devAuth}>Click</button>
                {/* <a href={authUrl} className="bg-blue-500">Sign Up</a> */}
            </div>
            </div>
        </div>
        </>

    )
}

export default Home;