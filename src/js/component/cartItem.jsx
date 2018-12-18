import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/cart.css";
import PropTypes from "prop-types";

const ColoredLine = () => (
	<hr
		style={{
			backgroundColor: "light gray",
			height: 1
		}}
	/>
);

export class CartItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: this.props.quantity
		};
	}

	qtyChange = change => {
		if (change == "add") {
			alert("hi");

			//this.setState.quantity = this.state.quantity + 1;
		}
	};

	render() {
		return (
			<div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							let product = store.products.find(products => {
								return products.sku === this.props.sku;
							});
							return (
								<React.Fragment>
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
											<strong>{product.name}</strong>
										</h4>
										<h4>
											<small>Product description</small>
										</h4>
									</div>
									<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
										<div className="col-3 col-sm-3 col-md-6 text-md-right padding-top-5">
											<h6>
												<strong>
													${product.price}{" "}
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
													onClick={this.qtyChange(
														"add"
													)}
												/>
												<input
													type="number"
													step="1"
													max="99"
													min="1"
													defaultValue={
														this.state.quantity
													}
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
								</React.Fragment>
							);
						}}
					</Context.Consumer>
				</div>
				<ColoredLine color="gray" />
			</div>
		);
	}
}

CartItem.propTypes = {
	sku: PropTypes.string,
	quantity: PropTypes.number
};
