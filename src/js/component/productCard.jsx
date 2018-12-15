import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.products.map((item, index) => {
								return (
									<div className="card col-lg-4" key={index}>
										<div className="card-header bg-transparent ">
											{item.category}
										</div>
										<img
											className="card-img-top"
											src={item.image}
											alt="Card image cap"
										/>

										<div className="card-body">
											<h5 className="card-title">
												{item.name}
											</h5>
											<p className="card-text">
												{item.description}
											</p>
											<p className="card-text">
												<small className="text-muted">
													Rating:
													{item.rating}
												</small>
											</p>
										</div>
										<div className="card-footer bg-transparent">
											{item.price}
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

export default withRouter(ProductCard);
