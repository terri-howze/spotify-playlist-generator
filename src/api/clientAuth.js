import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { devAuthState } from '../recoil_state';
import Axios from 'axios';



const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const clientSecret = import.meta.env.clientSecret
const redirect_uri =  "http://localhost:5173/"


function devAuth(code) {

    Axios
      .post('/auth', { 
      }).then(() =>{
      console.log(code)
      }).catch(err =>{
      console.log(err)
      })
  



  }
export default devAuth