import { Routes, Route, Link } from 'react-router-dom';

import './styles/style.css';
import Home from './pages/Home';
import Authorization from './pages/Authorization';
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost/AddPost';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
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
