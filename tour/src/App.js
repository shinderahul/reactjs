import React, { useState, useEffect } from 'react';
import Loading from './component/Loading';
import Tours from './component/Tours';

const url =
	'https://raw.githubusercontent.com/shinderahul/reactjs/main/tour/src/tours.json';

function App() {
  const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
			// console.log(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} />
		</main>
	);
}

export default App;
