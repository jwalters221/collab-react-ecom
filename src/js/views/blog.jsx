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
										<Link to=".">Lifestyle</Link>
									</div>
									<h3 className="post-title title-lg">
										<Link to="./">
											Postea senserit id eos, vivendo
											periculis ei qui
										</Link>
									</h3>
									<ul className="post-meta">
										<li>
											<Link to="./">John Doe</Link>
										</li>
										<li>20 April 2018</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-4 hot-post-right">
							<div className="post post-thumb">
								<Link className="post-img" to="./">
									<img
										src="https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg"
										alt=""
									/>
								</Link>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Lifestyle</Link>
									</div>
									<h3 className="post-title">
										<Link to="./">
											Sed ut perspiciatis, unde omnis iste
											natus error sit
										</Link>
									</h3>
									<ul className="post-meta">
										<li>
											<Link to="./">John Doe</Link>
										</li>
										<li>20 April 2018</li>
									</ul>
								</div>

								<div className="post post-thumb">
									<Link className="post-img" to="./">
										<img
											src="https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg"
											alt=""
										/>
									</Link>
									<div className="post-body">
										<div className="post-category">
											<Link to="./">Fashion</Link>
											<Link to="./">Lifestyle</Link>
										</div>
										<h3 className="post-title">
											<Link to="./">
												Mel ut impetus suscipit
												tincidunt. Cum id ullum
												laboramus persequeris.
											</Link>
										</h3>
										<ul className="post-meta">
											<li>
												<Link to="./">John Doe</Link>
											</li>
											<li>20 April 2018</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="tab-pane ">
					<div className="row">
						<div className="col-md-4">
							<div className="post post-sm">
								<div className="post-img">
									<img
										src="https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg"
										alt=""
									/>
								</div>
								<div className="post-body">
									<div className="post-category">
										<Link to="./">Lifestyle</Link>
									</div>
									<h3 className="post-title title-sm">
										<Link to="./">
											Postea senserit id eos, vivendo
											periculis ei qui
										</Link>
									</h3>
									<ul className="post-meta">
										<li>
											<Link to="./">John Doe</Link>
										</li>
										<li>20 April 2018</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="post post-sm">
						<Link to="./">
							<div className="post-img">
								<img src="https://images.pexels.com/photos/539124/drone-camera-4k-1080-539124.jpeg" />
							</div>
						</Link>
						<div className="post-body">
							<div className="post-category">
								<Link to="./">Fashion</Link>
								<Link to="./">Lifestyle</Link>
							</div>
							<h3 className="post-title title-sm">
								<Link to="./">
									Sed ut perspiciatis, unde omnis iste natus
									error sit
								</Link>
							</h3>
							<ul className="post-meta">
								<li>
									<a>John Doe</a>
								</li>
								<li>20 April 2018</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
