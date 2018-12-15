import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { SignIn } from "../component/signin.jsx";

export class LogIn extends React.Component {
	render() {
		return (
			<div>
				<SignIn />
			</div>
		);
	}
}
