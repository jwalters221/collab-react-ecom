import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<Link to="./">Home</Link>
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<Link to="./products">Products</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<Link to="./blog">Blog</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<Link to="./contact">Contacts</Link>
								</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										<Link to="./login">Login</Link>
										<span className="sr-only" />
									</a>
								</li>

								<li className="nav-item active">
									<a className="nav-link" href="#">
										<Link to="./checkout">
											<i className="fas fa-shopping-cart" />
										</Link>
										<span className="sr-only" />
									</a>
								</li>
							</ul>

							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-primary my-2 my-sm-0"
								type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}
