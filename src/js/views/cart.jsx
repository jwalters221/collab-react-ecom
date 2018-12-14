import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Cart extends React.Component {
	render() {
		return <h1> Cart View</h1>;
	}
}

Cart.propTypes = {
	match: PropTypes.object
};
