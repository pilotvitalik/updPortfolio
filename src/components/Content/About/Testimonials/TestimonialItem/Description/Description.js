import React, { Component } from 'react';
import style from './description.module.css';

class Description extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text,
		};
	}

	render(){
		return(
			<div className={ style.desc }>
				<p>{ this.state.text }</p>
			</div>
		);
	}
}

export { Description };