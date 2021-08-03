import React, { forwardRef } from 'react';
import "./Post.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {Avatar} from "@material-ui/core"
import InputOption from "./InputOption"
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post=forwardRef(({name,discription,message,photoUrl},ref)=> {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{discription}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>

            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
                <InputOption Icon={CommentIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
