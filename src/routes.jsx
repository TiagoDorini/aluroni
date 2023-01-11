import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dishes' element={<DishMenu />} />
			</Routes>
		</Router>
	)
}
