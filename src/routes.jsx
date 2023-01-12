import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from 'components/Menu'
import Header from 'components/Header'
import About from 'pages/About'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Dish from 'pages/Dish'

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Header />}>
						<Route index element={<Home />} />
						<Route path='dishes' element={<DishMenu />} />
						<Route path='about' element={<About />} />
						<Route path='dish/:id' element={<Dish />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}
