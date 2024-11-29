import React from 'react';
import { Link } from 'react-router-dom';
import TagIcon from '@mui/icons-material/Tag';
import noAvatarImg from '../assets/noavatarimg.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-top tags-block side-block">
        <div className="block-title">Tags</div>
        <ul>
          <li>
            <TagIcon/>
            <Link to="#">React</Link>
          </li>
          <li>
            <TagIcon/>
            <Link to="#">Funds</Link>
          </li>
          <li>
            <TagIcon/>
            <Link to="#">BTC</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-body side-block">
        <div className="users-block">
        <div className="block-title">Users</div>
          <ul>
            <li>
              <div className="users-block-item">
                <img src={noAvatarImg} alt="" />
                <div className="users-item-info">
                  <div className="users-item-name">Aisha</div>
                </div>
              </div>
            </li>
            <li>
              <div className="user-block-item">
                <img src={noAvatarImg} alt="" />
                <div className="user-item-info">
                  <div className="user-item-name">Amina</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-bottom side-block"></div>
    </div>
  )
}

export default Sidebar