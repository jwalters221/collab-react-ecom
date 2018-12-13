import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class SignIn extends Component {
	render() {
		return (
			<div className="container mb-5 ">
				<div className="row d-flex justify-content-center">
					<div>
						<img
							src="/docs/4.0/assets/brand/bootstrap-solid.svg"
							width="30"
							height="30"
							alt=""
						/>
					</div>
					<div>
						<h2>Please sign in </h2>
					</div>
					<form>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Email address"
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Password"
							/>
						</div>

						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="gridRadios"
								id="gridRadios1"
								value="option1"
								checked
							/>
							<label
								className="form-check-label"
								htmlFor="gridRadios1">
								Remember me
							</label>
						</div>
						<button type="submit" className="btn btn-primary mb-2">
							Sign in
						</button>
					</form>
				</div>
			</div>
		);
	}
}
