import { useState } from "react";
import { auth } from "../firebase/config";
import {createUserWithEmailAndPassword} from "firebase/auth"


export const useSignUp = () => {
    const [error,setError] = useState(null)
   
    const signup = (email,password,username) => {
        setError(null)
        createUserWithEmailAndPassword(auth,email,password,username).then((res) => {
            // dispatch({type:'SIGNUP',payload:res.user})
            console.log('Kullanıcı oluştu',res.user);
            
        }).catch((err) => {
            setError(err.message)
        })
    }
    return{error,signup}
}