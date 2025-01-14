import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
	return (
		<div className="jumbotron py-5 px-4">
			<h1 className="display-4 fw-bold">{props.title}</h1>
			<p className="lead" style={{fontSize: 21}}>{props.description}</p>
				<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">{props.buttonLabel}</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
};

export default Jumbotron;