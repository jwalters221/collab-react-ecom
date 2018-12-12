import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Login extends React.Component {
	render() {
		return <div className="jumbotron">Login Page</div>;
	}
}
Login.propTypes = {
	match: PropTypes.object
};
