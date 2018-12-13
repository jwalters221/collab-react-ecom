import React from "react";

export class Post extends React.Component {
	render() {
		return (
			<div className="container marketing">
				{/* Three columns of text below the carousel */}
				<div className="row">
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="http://demos.themes.guide/bodeo/assets/images/users/w100.jpg"
							alt="Generic placeholder image"
							width="140"
							height="140"
						/>
						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna
							mollis euismod. Nullam id dolor id nibh ultricies
							vehicula ut id elit. Morbi leo risus, porta ac
							consectetur ac, vestibulum at eros. Praesent commodo
							cursus magna.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="#"
								role="button">
								View details &raquo;
							</a>
						</p>
					</div>
					{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="http://demos.themes.guide/bodeo/assets/images/users/w105.jpg"
							alt="Generic placeholder image"
							width="140"
							height="140"
						/>
						<h2>Heading</h2>
						<p>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula, eget lacinia odio sem nec elit.
							Cras mattis consectetur purus sit amet fermentum.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="#"
								role="button">
								View details &raquo;
							</a>
						</p>
					</div>
					{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="http://demos.themes.guide/bodeo/assets/images/users/m100.jpg"
							alt="Generic placeholder image"
							width="140"
							height="140"
						/>
						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Cras justo odio, dapibus ac
							facilisis in, egestas eget quam. Vestibulum id
							ligula porta felis euismod semper. Fusce dapibus,
							tellus ac cursus commodo, tortor mauris condimentum
							nibh, ut fermentum massa justo sit amet risus.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="#"
								role="button">
								View details &raquo;
							</a>
						</p>
					</div>{" "}
					{/* /.col-lg-4 */}
				</div>
				{/* /.row */}

				{/* START THE FEATURETTES */}

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							First featurette heading.{" "}
							<span className="text-muted">
								It ll blow your mind.
							</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
					<div className="col-md-5">
						<img
							className="featurette-image img-fluid mx-auto"
							src="https://placeimg.com/500/500/any"
							alt="Generic placeholder image"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">
							Oh yeah, its that good.{" "}
							<span className="text-muted">
								See for yourself.
							</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img
							className="featurette-image img-fluid mx-auto"
							src="https://placeimg.com/500/500/arch"
							alt="Generic placeholder image"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							And lastly, this one.{" "}
							<span className="text-muted">Checkmate.</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
					<div className="col-md-5">
						<img
							className="featurette-image img-fluid mx-auto"
							src="https://placeimg.com/500/500/nature"
							alt="Generic placeholder image"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				{/* /END THE FEATURETTES */}
			</div>
		);
	}
}
