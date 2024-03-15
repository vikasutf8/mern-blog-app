import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice.js'
import {useNavigate} from 'react-router-dom'

export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)
    const handleGoogleClick =async()=>{
        const provider =new  GoogleAuthProvider() 
        provider.setCustomParameters({prompt:'select_account'})
        try {
            const resultFromGoolge =await signInWithPopup(auth,provider)
            // console.log(resultFromGoolge)
            // move to backend
            const res =await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name: resultFromGoolge.user.displayName,
                    email: resultFromGoolge.user.email,
                    googlePhotoUrl: resultFromGoolge.user.photoURL,
                }),
            })
            const data =await res.json()
            if(res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
         Continue with Google
    </Button>
  )
}
