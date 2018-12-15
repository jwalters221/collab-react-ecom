import React from "react";
import ProductCard from "./productCard.jsx";
import Featured from "./featured.jsx";
import { Link } from "react-router-dom";

export class Post extends React.Component {
	render() {
		return (
			<div>
				<Featured />

				{/* Three columns of text below the carousel */}
			</div>
		);
	}
}
