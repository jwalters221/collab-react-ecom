import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../component/post.jsx";
import { Carousel } from "../component/carousel.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import SignIn from "../component/signin.jsx";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Carousel />
				<Post />
			</React.Fragment>
		);
	}
}
