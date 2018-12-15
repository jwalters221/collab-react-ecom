import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Rating } from "../component/rating.jsx";

export class Product extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					var product = store.products.find(item => {
						return item.sku == this.props.match.params.theid;
					});

					return (
						<div className="container">
							<div className="row justify-content-center p-4 bg-light">
								<h1>{product.name}</h1>
							</div>
							<div className="row justify-content-center">
								<div className="col m-4 text-center">
									<img
										className="img-fluid"
										src={product.image}
									/>
								</div>
								<div className="col m-4">
									<p>{product.description}</p>
									<div className="row">
										<div className="col-4 my-4">
											<h3>${product.price}</h3>
										</div>
										<div className="col my-4">
											<button
												type="button"
												className="btn btn-primary">
												Add to Cart
											</button>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<Rating stars={product.rating} />
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Product.propTypes = {
	match: PropTypes.object
};
