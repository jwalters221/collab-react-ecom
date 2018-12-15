//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout.jsx";

//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//import {  } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
