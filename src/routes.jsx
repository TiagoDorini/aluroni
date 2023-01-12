import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from 'components/Menu'
import Header from 'components/Header'
import About from 'pages/About'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Dish from 'pages/Dish'

export const routes = {
	home: {
		menuItem: true,
		label: 'Home',
		path: '/',
		component: <Home />,
		routeComponent: <Route index element={<Home />} />,
	},
	dishes: {
		menuItem: true,
		label: 'Menu',
		path: 'dishes',
		component: <DishMenu />,
		routeComponent: <Route path='dishes' element={<DishMenu />} />,
	},
	about: {
		menuItem: true,
		label: 'About Us',
		path: 'about',
		component: <About />,
		routeComponent: <Route path='about' element={<About />} />,
	},
	dish: {
		menuItem: false,
		label: null,
		path: 'dish',
		component: <Dish />,
		routeComponent: <Route path='dish/:id' element={<Dish />} />,
	},
}
export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Header />}>
						{Object.values(routes).map((item) => item.routeComponent)}
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}
