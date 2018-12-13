import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import SignIn from "../component/signin.jsx";

export class Login extends React.Component {
	render() {
		return (
			<div>
				<SignIn />
			</div>
		);
	}
}
