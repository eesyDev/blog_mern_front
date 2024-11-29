import React from 'react'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { id, title, createdAt, image, tags, userName, userImg, isLoading } = props;
  return (
    <div className='post-item'>
        <img src={image} alt={title} className="post-item-img" />
        <div className="post-item-info">
            <div className="post-item-user-info">
                <img src={userImg} alt={userName} />
                <div className="post-item-user-name">
                    <div className="name">{userName}</div>
                    <div className="date">{createdAt}</div>
                </div>
            </div>
            <div className="post-item-info-details">
                <h2 className="post-item-title">
                    <Link>{title}</Link>
                </h2>
                <ul className="post-item-tags">
                    {
                        tags?.map(tag => (
                            <li><Link>{tag}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Post