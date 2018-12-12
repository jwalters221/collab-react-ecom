import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Checkout extends React.Component {
	render() {
		return <div className="jumbotron">Checkout Page</div>;
	}
}

Checkout.propTypes = {
	match: PropTypes.object
};
