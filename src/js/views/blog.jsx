import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Blog extends Component {
	render() {
		return (
			<div>
				<div className="container mt-5">
					<div id="hot-post" className="row hot-post">
						<div className="col-md-8 hot-post-left">
							<div className="post post-thumb">
								<Link to="./" className="post-img">
									<img src="https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg" />
								</Link>

								<div className="post-body">
									<div className="post-category">
										<Link to=".">Drones</Link>
									</div>
									<h3 className="post-title title-lg">
										<Link to="./">
											The farm of the future just may be
											drone driven
										</Link>
									</h3>
									<ul className="post-meta">
										<li />
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-4 hot-post-right">
							<div className="post post-thumb">
								<Link className="post-img" to="./">
									<img
										src="https://i.imgur.com/WVBxGMg.jpg"
										alt=""
									/>
								</Link>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Snow Plow</Link>
									</div>
									<h3 className="post-title">
										<Link to="./">
											Let it snow! Let it snow!
										</Link>
									</h3>
									<ul className="post-meta">
										<li />
									</ul>
								</div>

								<div className="post post-thumb">
									<Link className="post-img" to="./">
										<img
											src="https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg"
											alt=""
										/>
									</Link>
									<div className="post-body">
										<div className="post-category">
											<Link to="./">
												Medical Marijuana
											</Link>
										</div>
										<h3 className="post-title">
											<Link to="./">
												Growing medical grade marijuana
												in the snow!
											</Link>
										</h3>
										<ul className="post-meta">
											<li />
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="text-left post-category">
						<h4>Recent Posts</h4>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="post post-sm">
								<div className="post-img">
									<img
										src="https://i.imgur.com/o8qqxQB.jpg"
										alt=""
									/>
								</div>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Snow Plow</Link>
									</div>
									<h3 className="post-title title-sm">
										<Link to="./">New year new models</Link>
									</h3>
									<ul className="post-meta">
										<li />
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="post post-sm">
								<Link to="./">
									<div className="post-img">
										<img src="https://blog.reneerouleau.com/wp-content/uploads/2015/06/Renee-Rouleau-Apple-Skincare-Experiment-403x260.jpg" />
									</div>
								</Link>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Mens Health</Link>
									</div>
									<h3 className="post-title title-sm">
										<Link to="./">
											Cold weather calls for skin care too
										</Link>
									</h3>
									<ul className="post-meta">
										<li />
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="post post-sm">
								<Link to="./">
									<div className="post-img">
										<img src="https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg" />
									</div>
								</Link>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Drones</Link>
									</div>
									<h3 className="post-title title-sm">
										<Link to="./">
											FCC rules for surprising
											deregulation
										</Link>
									</h3>
									<ul className="post-meta">
										<li />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
