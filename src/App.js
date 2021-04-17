import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { products } from './constants'
import ProductsGrid from './components/ProductsGrid'

const App = () => {
	const initialCart = [
		{ id: 0, value: 0 },
		{ id: 1, value: 0 },
		{ id: 2, value: 0 },
		{ id: 3, value: 0 },
		{ id: 4, value: 0 },
		{ id: 5, value: 0 },
	]

	const [cart, setcart] = useState(initialCart)
	const [itemCount, setitemCount] = useState(0)

	useEffect(() => {
		setitemCount(cart.reduce((total, product) => total + product.value, 0))
	}, [cart])
	const handleIncrement = (product) => {
		setcart(
			cart.map((item) =>
				item.id === product.id
					? { ...item, value: item.value + 1 }
					: { ...item }
			)
		)
	}

	const handleDecrement = (product) => {
		setcart(
			cart.map((item) =>
				item.id === product.id
					? { ...item, value: item.value - 1 }
					: { ...item }
			)
		)
	}

	return (
		<div className='App'>
			<Navbar totalItems={itemCount} />
			<ProductsGrid
				products={products}
				cart={cart}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
			/>
		</div>
	)
}

export default App
