import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Rating extends Component {
	render() {
		const stars = this.props.stars;
		const rating = [];
		for (var i = 0; i < stars; i++) {
			rating.push(<FontAwesomeIcon key={i} icon="star" spin />);
		}
		for (""; i < 5; i++) {
			rating.push(<FontAwesomeIcon key={i} icon="star" />);
		}

		return <div>{rating}</div>;
	}
}

Rating.propTypes = {
	stars: PropTypes.string
};
