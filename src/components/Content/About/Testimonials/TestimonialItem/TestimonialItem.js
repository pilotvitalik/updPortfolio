import React, { Component } from 'react';
import style from './testimonialItem.module.css';
import { Description } from './Description/Description.js';
import { User } from './User/User.js';

class TestimonialItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.data.text,
			photo: this.props.data.photo,
			name: this.props.data.user_name,
			job: this.props.data.user_job,
		};
	}

	render(){
		return(
			<div className={ style.item }>
				<Description text={ this.state.text }/>
				<User photo={ this.state.photo } name={ this.state.name } job={ this.state.job }/>
			</div>
		);
	}
}

export { TestimonialItem };