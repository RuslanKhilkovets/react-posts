import React, { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

export const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(), ...post
        }
        create(newPost);
        setPost({title: "", body: ""})
    }
    
    return(
        <form action="#">
            <Input type="text" placeholder='Post title' value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
            <Input type="text" placeholder='Post description' value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} />
            <Button onClick={(e) => addNewPost(e)}>New post</Button>
        </form>
    )
}

export default PostForm;