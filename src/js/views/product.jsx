import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Product extends React.Component {
	render() {
		return <div className="jumbotron">Single Product Page</div>;
	}
}

Product.propTypes = {
	match: PropTypes.object
};
