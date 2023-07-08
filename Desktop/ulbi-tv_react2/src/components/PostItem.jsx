import React from 'react';
import Button from './UI/button/Button';
import { useNavigate } from 'react-router-dom';
export const PostItem = (props) => {
    const router = useNavigate()
    console.log(router)
    return(
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.remove(props.post)}>Remove</Button>
                <Button onClick={() => router(`/posts/${props.post.id}`)}>Open</Button>

            </div>
        </div>
    )
}

export default PostItem;