import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostServise from '../components/API/PostServise';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServise.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostServise.getCommentsByPostId(id)
        setComments(response.data)  
    })
    useEffect(() => {
        fetchPostById(params.id)    
        fetchComments(params.id)
    }, [])
    console.log(comments)
    return ( 
        <>
            <h1>Post page from posts with id = {params.id}</h1>
            {isLoading 
                ? <Loader/>
                : 
                <h4>
                    {post.id} {post.title} 
                </h4>
            }           
            <h1>Comments</h1>
            {isCommentsLoading  
                ? <Loader/>
                : 
                <div>
                    {comments.map(comm => (
                        <div style={{margin: "30px auto", display: 'flex', justifyContent: 'center', flexDirection: 'column', width: 900}} 
                        key={comm.id}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    ))}
                </div>
            }     
        </>
     );
}
 
export default PostIdPage;