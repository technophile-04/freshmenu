import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ProductDetails } from '../pages';
import { Navbar } from './';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/product/:productId">
						<ProductDetails />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
