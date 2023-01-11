import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from 'components/Menu'
import Header from 'components/Header'
import About from 'pages/About'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Header />}>
						<Route index element={<Home />} />
						<Route path='dishes' element={<DishMenu />} />
						<Route path='about' element={<About />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}
