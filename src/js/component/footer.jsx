import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Footer extends Component {
	render() {
		return (
			<footer className="page-footer font-small blue .bg-dark footer">
				<div className="footer-copyright text-center py-3">
					Let&apos;s get social
					<div>
						<i className="fab fa-facebook-square" />
						&nbsp;
						<i className="fab fa-instagram" />
						&nbsp;
						<i className="fab fa-twitter-square" />
					</div>
					<h6 className="text-center">
						© Electro Med Plow LLC 2017-2018
					</h6>
				</div>
			</footer>
		);
	}
}
