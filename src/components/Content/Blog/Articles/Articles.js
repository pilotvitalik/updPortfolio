import React from 'react';
import { ItemArticle } from './ItemArticle/ItemArticle.js';

class Articles extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list: this.props.articles,
		};
	}

	render(){
		const list = this.state.list;
		const items = list.map((item) => 
			<ItemArticle key={ item.id } data={ item }/>
		);
		return(
			<ul>
				{ items }
			</ul>
		);
	}

}

export { Articles };