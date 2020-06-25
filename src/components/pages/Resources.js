import React, { Component } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

class Resources extends Component {
	render() {
		return (
			<div>
				<h2>Resources</h2>
				<h3>Video Section</h3>
				<p>
					<div className='App'>
						<header className='App-header'>
							<ReactPlayer
								url='https://www.youtube.com/watch?v=Qd4mxDwEcJo'
								controls={true}
							/>
						</header>
						<br />
						<br />
						<header className='App-header'>
							<ReactPlayer
								url='https://www.youtube.com/watch?v=zTitoHKsyJg'
								controls={true}
							/>
						</header>
					</div>
				</p>
				<h3>Helpful Links</h3>
				<p>www.google.com</p>
			</div>
		);
	}
}

export default Resources;
