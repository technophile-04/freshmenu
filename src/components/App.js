import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Home, Login, ProductDetails, Register } from '../pages';
// import { Navbar } from './';

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/product/:productId">
						<ProductDetails />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
