import React, { Component } from 'react';
import style from './personalInfo.module.css';
import { InfoItem } from './InfoItem/InfoItem.js';
import { Button } from '../../../../Common/Button/Button.js';

class PersonalInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.personal.titleArticle,
			btn: this.props.personal.button,
			pers: this.props.personal.data,
		};
	}

	render(){
		const data = this.state.pers;
		const persItem = data.map((item) => 
			<InfoItem key={ item.id } info={ item }/>
		);
		return(
			<div className={ style.personInfo }>
				<h3>{ this.state.title }</h3>
				<div>
					{ persItem }
				</div>
				<Button btn={ this.state.btn }/>
			</div>
		);
	}
}

export { PersonalInfo };