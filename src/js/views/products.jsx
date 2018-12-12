import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Products extends React.Component {
	render() {
		return (
			<div>
				<h1>Product View</h1>
				<p>This will be the product page.</p>
			</div>
		);
	}
}

Products.propTypes = {
	match: PropTypes.object
};
