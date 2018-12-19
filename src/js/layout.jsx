import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Blog } from "./views/blog.jsx";
import { BlogPost } from "./views/blogposts.jsx";
import { Demo } from "./views/demo.jsx";
import { Checkout } from "./views/checkout.jsx";
import { Product } from "./views/product.jsx";
import { LogIn } from "./views/login.jsx";
import { Products } from "./views/products.jsx";
import { Cart } from "./views/cart.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Carousel } from "./component/carousel.jsx";

import { SignIn } from "./component/signin.jsx";
//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/blog" component={Blog} />
						<Route path="/blogpost" component={BlogPost} />
						<Route path="/login" component={LogIn} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/products" component={Products} />
						<Route path="/product/:theid" component={Product} />
						<Route path="/cart" component={Cart} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
