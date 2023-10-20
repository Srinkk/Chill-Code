import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Problems from "./components/Problems";
import './App.css';
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {

	const [mode, setMode] = useState('light')
	const [color, setColor] = useState('')
    const [bgColor, setBgColor] = useState('')

	const [loginStatus, setLoginStatus] = useState(false)

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
			<NavBar mode={mode} setMode={setMode} color={color} bgColor={bgColor} loginStatus={loginStatus}/>
			<Routes>
				<Route path='/' element={<Home color={color} bgColor={bgColor} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}/>
				<Route path='/problems' element={<Problems color={color} bgColor={bgColor}/>}/>
				<Route path='*' element = {<NotFound color={color} bgColor={bgColor}/>}/>
			</Routes>
		</div>
	);
}

export default App;
