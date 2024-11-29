import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useGetAllPostsQuery, useGetTagsQuery } from '../redux/services/postApi';
import Post from '../components/Post/Post';
import noAvatar from '../assets/noavatarimg.png'

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
  }, [tagsQuery.data]);

  console.log(posts)

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
                  <Post isLoading={false} key={index} 
                      id={post?._id}
                      title={post?.title}
                      image={post?.imageUrl ? `http://localhost:4444${post?.imageUrl}` : noAvatar}
                      userName={post?.user?.fullName}
                      userImg={post?.user?.image}
                      createdAt={post?.createdAt}
                      viewsCount={post?.viewsCount}
                      commentsCount={post?.commentsCount}
                      tags={post?.tags}

                  />
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