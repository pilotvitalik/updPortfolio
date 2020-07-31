import React from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './Content.module.css';

import { Home } from './Home/Home.js';
import { About } from './About/About.js';
import { Resume } from './Resume/Resume.js';
import { Portfolio } from './Portfolio/Portfolio.js';
import { Blog } from './Blog/Blog.js';
import { Contact } from './Contact/Contact.js';

class Content extends React.Component{
	render(){
		return(
		<div className={ style.wrapper }>
		  <div>
		    <div className={ style.mobNav }>
		    	<div>
		    	</div>
		    	<p>Виталий Кожушко</p>
		    	<div className={ style.hamburger }>
		    		<span></span>
		    		<span></span>
		    		<span></span>
		    	</div>
		    </div>
		    <Switch>
		    	<Route exact path='/'>
		    		<Home/>
		    	</Route>
		    	<Route path='/about_me'>
		    		<About/>
		    	</Route>
		    	<Route path='/resume'>
		    		<Resume/>
		    	</Route>
		    	<Route path='/portfolio'>
		    		<Portfolio/>
		    	</Route>
		    	<Route path='/blog'>
		    		<Blog/>
		    	</Route>
		    	<Route path='/contacts'>
		    		<Contact/>
		    	</Route>
		    </Switch>
		  </div>
		</div>
		);
	}
}

export { Content };