import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Problems from "./components/Problems";
import Problem from "./components/Problem";
import './App.css';
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {

	const [mode, setMode] = useState('light')
	const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('')

	const [loginStatus, setLoginStatus] = useState(false)
	const [loginBoxStatus, setLoginBoxStatus] = useState('closed')

	useEffect(() => {
		if (mode === 'light') {
			setColor('#000')
			setBgColor('#fff')
		} else {
			setColor('#fff')
			setBgColor('#000')
		}
	}, [mode])

	return (
		<div className="App">
			<NavBar mode={mode} setMode={setMode} color={color} bgColor={bgColor} loginStatus={loginStatus} setLoginStatus={setLoginStatus} setLoginBoxStatus={setLoginBoxStatus}/>
			<Routes>
				<Route path='/' element={<Home color={color} bgColor={bgColor} loginStatus={loginStatus} setLoginStatus={setLoginStatus} loginBoxStatus={loginBoxStatus} setLoginBoxStatus={setLoginBoxStatus}/>}/>
				<Route path='/problems' element={<Problems color={color} bgColor={bgColor} loginStatus={loginStatus}/>}/>
				<Route path='/problem/*' element={<Problem color={color} bgColor={bgColor} loginStatus={loginStatus} setLoginBoxStatus={setLoginBoxStatus}/>}/>
				<Route path='*' element = {<NotFound color={color} bgColor={bgColor}/>}/>
			</Routes>
			{ 
				(loginBoxStatus === 'open') && <Login color={color} bgColor={bgColor} setLoginBoxStatus={setLoginBoxStatus}/>
			}
		</div>
	);
}

export default App;
