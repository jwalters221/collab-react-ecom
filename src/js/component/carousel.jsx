import React from "react";
import { Link } from "react-router-dom";

export class Carousel extends React.Component {
	render() {
		return (
			<div
				id="myCarousel"
				className="carousel slide mb-4"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" />
					<li data-target="#myCarousel" data-slide-to="1" />
					<li data-target="#myCarousel" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="first-slide d-block w-100"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="First slide"
						/>
						<div className="container">
							<div className="carousel-caption text-left">
								<h1>Example headline.</h1>
								<p>
									Cras justo odio, dapibus ac facilisis in,
									egestas eget quam. Donec id elit non mi
									porta gravida at eget metus. Nullam id dolor
									id nibh ultricies vehicula ut id elit.
								</p>
								<p>
									<Link
										to="#"
										className="btn btn-lg btn-primary"
										role="button">
										Sign up today
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="second-slide"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="Second slide"
						/>
						<div className="container">
							<div className="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Cras justo odio, dapibus ac facilisis in,
									egestas eget quam. Donec id elit non mi
									porta gravida at eget metus. Nullam id dolor
									id nibh ultricies vehicula ut id elit.
								</p>
								<p>
									<Link
										className="btn btn-lg btn-primary"
										to="#"
										role="button">
										Learn more
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="third-slide"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="Third slide"
						/>
						<div className="container">
							<div className="carousel-caption text-right">
								<h1>One more for good measure.</h1>
								<p>
									Cras justo odio, dapibus ac facilisis in,
									egestas eget quam. Donec id elit non mi
									porta gravida at eget metus. Nullam id dolor
									id nibh ultricies vehicula ut id elit.
								</p>
								<p>
									<Link
										className="btn btn-lg btn-primary"
										to="#"
										role="button">
										Browse gallery
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<Link
					to="#myCarousel"
					className="carousel-control-prev"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</Link>
				<Link
					className="carousel-control-next"
					to="#myCarousel"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</Link>
			</div>
		);
	}
}
