import { useEffect } from 'react'
import devAuth from '../api/clientAuth'
import { devAuthState } from '../recoil_state'
import axios from 'axios'

export default function Dashboard(code) {
  
    
      useEffect(() => {
      axios
        .get('http://localhost:5173/login', { 
        }).then(() =>{
        console.log(code)
        }).catch(err =>{
        console.log(err)
        })
      }, [code])
    return (
        <>
        </>
  )
}

