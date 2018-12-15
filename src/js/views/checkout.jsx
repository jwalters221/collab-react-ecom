import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Checkout extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 order-md-2 mb-4">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className="text-muted">Your cart</span>
							<span className="badge badge-secondary badge-pill">
								3
							</span>
						</h4>
						<ul className="list-group mb-3">
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Product name</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$12</span>
							</li>
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Second product</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$8</span>
							</li>
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Third item</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$5</span>
							</li>

							<li className="list-group-item d-flex justify-content-between">
								<span>Total (USD)</span>
								<strong>$25</strong>
							</li>
						</ul>
					</div>

					<div className="col-md-8 order-md-1">
						<h4 className="mb-3">Billing Address</h4>
						<form className="needs-validation">
							<div className="form-group">
								<label>Full Name</label>
								<input
									id="name"
									type="name"
									className="form-control"
									placeholder="Enter full name"
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									id="email"
									type="email"
									className="form-control"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									id="phone"
									type="phone"
									className="form-control"
									placeholder="Enter phone"
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									id="address"
									type="text"
									className="form-control"
									placeholder="Enter address"
								/>
							</div>
							<h4 className="mb-3">Payment</h4>
							<div className="form-group">
								<label>Name on card</label>
								<input
									id="card-name"
									type="text"
									className="form-control"
									placeholder="Name on card"
								/>
							</div>
							<div className="form-group">
								<label>Credit card number</label>
								<input
									id="cc-number"
									type="text"
									className="form-control"
									placeholder="Enter Credit Card Number"
								/>
							</div>
							<div className="form-group">
								<label>Expiration</label>
								<input
									id="address"
									type="text"
									className="form-control"
									placeholder="Expiration Date"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Checkout.propTypes = {
	match: PropTypes.object
};
