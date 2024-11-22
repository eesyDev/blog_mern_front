import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSlice from '../redux/slices/authSlice';

const Header = () => {

	const isAuth = useSelector((state) => state.authSlice.isLoggedIn);

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
								<Link className='btn btn-outlined'>Create Post</Link>
								<Link className='btn btn-error'>Log out</Link>
							</> : 
							<>
								<Link className='btn btn-outlined'>Create Account</Link>
								<Link className='btn btn-solid'>Log in</Link>
							</>
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
