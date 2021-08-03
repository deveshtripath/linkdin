import React,{useState,useEffect} from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from "./InputOption"
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post"
import {db} from "./firebase"
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice"
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost=(e)=>{
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            discription:user.email,
            message:input,
            photoUrl:user.photoUrl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
        
    }


    return (
        <div className="feed"> 
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>

                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"  />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"  />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"  />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e"  />
                </div>
            </div>
            <FlipMove>
            {posts.map(({id, data:{name,discription,message,photoUrl}}) =>(
                <Post
                    key={id}
                    name={name}
                    discription={discription}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>

            
        </div>
    )
}

export default Feed
