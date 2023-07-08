import { useEffect, useState } from 'react';
import PostServise from '../components/API/PostServise';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Loader from '../components/UI/Loader/Loader';
import Button from '../components/UI/button/Button';
import Modal from '../components/UI/modal/Modal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import "../styles/App.css";
import { getPageCount } from '../utils/pages';





function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit)); 
    })
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)

    }
    useEffect(() => {
        fetchPosts();
    }, [page]);
    return (
        <div className="App">   
            <Button style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create post
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: "10px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>{postError}</h1>}
            {isPostsLoading 
                ?   <Loader/>
                :   <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts"}/>
            }   
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
