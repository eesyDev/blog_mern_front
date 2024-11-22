import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSlice, logout }from '../redux/slices/authSlice';

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.authSlice.isLoggedIn);
	const onLogout = () => {
		if (window.confirm('Are you sure you wanna logout?')) {
			dispatch(logout());
			localStorage.removeItem('token')
		}
	}
	console.log(isAuth)
	return (
		<header className='header'>
			<div className="container">
				<div className="header-wrapper wrapper">
					<Link to="/" className="header-logo">MySuperBlog</Link>
					<div className="header-btns">
						{
							isAuth ? 
							<>
								<Link to="/post/add" className='btn btn-outlined'>Create Post</Link>
								<button className='btn btn-error'>Log out</button>
							</> : 
							<>
								<Link to="/autorization" className='btn btn-outlined'>Create Account</Link>
								<Link to="/autorization" className='btn btn-solid'>Log in</Link>
							</>
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
