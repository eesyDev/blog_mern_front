import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isAuth, setIsAuth] = useState(false)
	return (
		<header className='header'>
			<div className="container">
				<div className="header-wrapper wrapper">
					<div className="header-logo">MySuperBlog</div>
					<div className="header-btns">
						{
							isAuth ? 
							<>
								<Link>Create Post</Link>
								<Link>Log out</Link>
							</> : 
							<>
								<Link>Create Account</Link>
								<Link>Log in</Link>
							</>
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
