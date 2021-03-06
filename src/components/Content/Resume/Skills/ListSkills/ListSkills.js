import React, { Component } from 'react';
import { ItemSkill } from './ItemSkill/ItemSkill.js';

class ListSkills extends Component{
	constructor(props){
		super(props);
		this.state = {
			skills: this.props.list,
		}
	}

	render(){
		const list = this.state.skills;
		const items = list.map((item) => 
			<ItemSkill key={ item.id } data={ item }/>
		);
		
		return(
			<ul>
				{ items }
			</ul>
		);
	}
}

export { ListSkills };