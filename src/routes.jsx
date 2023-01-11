import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from 'components/Menu'
import Header from 'components/Header'

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Header />}>
						<Route index element={<Home />} />
						<Route path='dishes' element={<DishMenu />} />
					</Route>
				</Routes>
			</Router>
		</main>
	)
}
