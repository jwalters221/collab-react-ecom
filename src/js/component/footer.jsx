import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Footer extends Component {
	render() {
		return <h6 className="text-center">© 2017-2018</h6>;
	}
}
