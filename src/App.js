import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/style.css';
import Home from './pages/Home';
import Authorization from './pages/Authorization';
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost/AddPost';
import Profile from './pages/Profile';
import Header from './components/Header';
import { getProfile } from './redux/slices/authSlice';

function App() {
	const userTokenInStorage = localStorage.getItem('token');
	const dispatch = useDispatch();

	console.log(userTokenInStorage)
	useEffect(() => {
		if (userTokenInStorage) {
			dispatch(getProfile({ isLoggedIn: true }))
		}
	}, [])
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/autorization"  element={<Authorization/>} />
				<Route path="/post/:id" element={<SinglePost/>}/>
				<Route path="/post/:id/edit" element={<AddPost/>}/>
				<Route path="/post/add" element={<AddPost/>}/>
			</Routes>
		</div>
	);
}

export default App;
