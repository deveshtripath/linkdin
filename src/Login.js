import React,{useState} from 'react'
import "./Login.css"
import {useDispatch} from "react-redux"
import {auth } from "./firebase"
import {login} from "./features/userSlice"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch()

    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email:userAuth.email,
                uid:userAuth.uid,
                displayName:userAuth.displayName,
                photoUrl:userAuth.photoURL,

            }))
        }).catch((error)=> alert(error));
    }
    const register=()=>{
        if (!name){
            return alert("Please Enter a full Name");
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                }));
            });
        }).catch((error)=>{
            alert(error);
        })
    }


    return (
        <div className="login">
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt=""  />
        <form action="">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" type="text" />
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)}  placeholder="Profile pic Url(optional)" type="text" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
            <button type="submit" onClick={loginToApp}>Sign in</button>

        </form>
        <p>Not a member{" "}
        <span className="login__register" onClick={register}>Register Now</span></p>
           
        </div>
    )
}

export default Login
