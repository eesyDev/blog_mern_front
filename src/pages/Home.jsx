import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useGetAllPostsQuery, useGetTagsQuery } from '../redux/services/postApi';
import Post from '../components/Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const postsQuery = useGetAllPostsQuery();
  const tagsQuery = useGetTagsQuery();

  const postsList = postsQuery?.data?.posts || [];
  const tagsList = tagsQuery.data || [];

  const isPostFetching = postsQuery.isFetching;
  const isTagsFetching = tagsQuery.isFetching;

  useEffect(() => {
    setPosts(postsList)
  }, [postsQuery.data])

  useEffect(() => {
    setTags(tagsList)
  }, [tagsQuery.data])

  console.log(tags, posts)
  return (
    <div className='page'>
      <Header/>
      <div className="home">
        <div className="container">
          <div className='tabs'>
            <div className="tab">Newest</div>
            <div className="tab">Popular</div>
          </div>
          <div className="home-wrapper">
            <div className="home-posts">
              {
                (isPostFetching ? [...Array(5)] : posts).map((post, index) => (
                  isPostFetching ? 
                  <Post isLoading={true} key={index}/> : 
                  <Post isLoading={false} key={index} {...post}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Home