import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PostList = ({posts, title, remove}) => {
    if(!posts.length) 
        return <h1 style={{textAlign: "center"}}>Posts is not defined</h1>

    return(
        <>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => 
                <CSSTransition 
                    key={post.id}
                    timeout={300}
                    classNames="post">
                    <PostItem 
                        remove={remove} 
                        post={post} 
                        number={post.id}
                    />
                </CSSTransition>
            )}
               

            </TransitionGroup>
           
        </>
    )
}
export default PostList;