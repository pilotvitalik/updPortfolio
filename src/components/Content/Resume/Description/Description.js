import React, { Component } from 'react';
import { LeftDescript } from './LeftDescript/LeftDescript.js';
import { RightDescript } from './RightDescript/RightDescript.js';
import style from './Description.module.css'

class Description extends Component{
	constructor(props){
		super(props);
		this.state = {
			leftDesc: this.props.descript[0],
			rightDesc: this.props.descript[1],
		}
	}

	render(){
		return(
			<div className={ style.description }>
				<LeftDescript desc={ this.state.leftDesc }/>
				<RightDescript desc={ this.state.rightDesc }/>
			</div>
		);
	}
}

export { Description };