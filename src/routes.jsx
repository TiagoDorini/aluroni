import Home from 'pages/Home'
import DishMenu from 'pages/DishMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from 'components/Menu'
import Header from 'components/Header'
import About from 'pages/About'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Dish from 'pages/Dish'
import { pathPrefix } from 'variables'

export const routes = {
	home: {
		menuItem: true,
		label: 'Home',
		path: `${pathPrefix}`,
		component: <Home />,
		routeComponent: <Route index element={<Home />} />,
	},
	dishes: {
		menuItem: true,
		label: 'Menu',
		path: `${pathPrefix}/dishes`,
		component: <DishMenu />,
		routeComponent: <Route path='dishes' element={<DishMenu />} />,
	},
	about: {
		menuItem: true,
		label: 'About Us',
		path: `${pathPrefix}/about`,
		component: <About />,
		routeComponent: <Route path='about' element={<About />} />,
	},
	dish: {
		menuItem: false,
		label: null,
		path: `${pathPrefix}/dish`,
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
					<Route path={pathPrefix} element={<Header />}>
						{routes.home.routeComponent}
						{routes.dishes.routeComponent}
						{routes.about.routeComponent}
					</Route>
					{routes.dish.routeComponent}
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}
