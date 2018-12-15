import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/cart.css";

const ColoredLine = () => (
	<hr
		style={{
			backgroundColor: "light gray",
			height: 1
		}}
	/>
);

export class Cart extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card shopping-cart">
					<div className="card-header bg-dark text-light">
						<i className="fa fa-shopping-cart" aria-hidden="true" />
						&nbsp;Shopping cart
						<Link
							to="./products"
							className="btn btn-outline-info btn-sm pull-right">
							Continue Shopping
						</Link>
						<div className="clearfix" />
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-2 text-center">
								<img
									className="img-responsive"
									src="http://placehold.it/120x80"
									alt="prewiew"
									width="120"
									height="80"
								/>
							</div>
							<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
								<h4 className="product-name">
									<strong>Product Name</strong>
								</h4>
								<h4>
									<small>Product description</small>
								</h4>
							</div>
							<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
								<div className="col-3 col-sm-3 col-md-6 text-md-right padding-top-5">
									<h6>
										<strong>
											$25.00{" "}
											<span className="text-muted">
												x
											</span>
										</strong>
									</h6>
								</div>
								<div className="col-4 col-sm-4 col-md-4">
									<div className="quantity">
										<input
											type="button"
											value="+"
											className="plus"
										/>
										<input
											type="number"
											step="1"
											max="99"
											min="1"
											value="1"
											title="Qty"
											className="qty"
											size="4"
										/>
										<input
											type="button"
											value="-"
											className="minus"
										/>
									</div>
								</div>
								<div className="col-2 col-sm-2 col-md-2 text-right">
									<button
										type="button"
										className="btn btn-outline-danger btn-xs">
										<i
											className="fa fa-trash"
											aria-hidden="true"
										/>
									</button>
								</div>
							</div>
						</div>
						{/*<hr>*/}
						<ColoredLine color="gray" />
						<div className="row">
							<div className="col-12 col-sm-12 col-md-2 text-center">
								<img
									className="img-responsive"
									src="http://placehold.it/120x80"
									alt="prewiew"
									width="120"
									height="80"
								/>
							</div>
							<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
								<h4 className="product-name">
									<strong>Product Name</strong>
								</h4>
								<h4>
									<small>Product description</small>
								</h4>
							</div>
							<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
								<div className="col-3 col-sm-3 col-md-6 text-md-right padding-top-5">
									<h6>
										<strong>
											$25.00{" "}
											<span className="text-muted">
												x
											</span>
										</strong>
									</h6>
								</div>
								<div className="col-4 col-sm-4 col-md-4">
									<div className="quantity">
										<input
											type="button"
											value="+"
											className="plus"
										/>
										<input
											type="number"
											step="1"
											max="99"
											min="1"
											value="1"
											title="Qty"
											className="qty"
											size="4"
										/>
										<input
											type="button"
											value="-"
											className="minus"
										/>
									</div>
								</div>
								<div className="col-2 col-sm-2 col-md-2 text-right">
									<button
										type="button"
										className="btn btn-outline-danger btn-xs">
										<i
											className="fa fa-trash"
											aria-hidden="true"
										/>
									</button>
								</div>
							</div>
						</div>
						{/*<hr>*/}
						<ColoredLine color="gray" />

						<div className="pull-right">
							<Link
								to="./products"
								className="btn btn-outline-secondary pull-right">
								Update shopping cart
							</Link>
						</div>
					</div>
					<div className="card-footer">
						<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row">
								<div className="col-6">
									<input
										type="text"
										className="form-control"
										placeholder="coupon code"
									/>
								</div>
								<div className="col-6">
									<input
										type="submit"
										className="btn btn-default"
										value="Use coupon"
									/>
								</div>
							</div>
						</div>
						<div className="pull-right margin-10">
							<Link
								to="./products"
								className="btn btn-success pull-right">
								Checkout
							</Link>
							<div className="pull-right margin-5">
								Total price: <b>$50.00</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {
	match: PropTypes.object
};
