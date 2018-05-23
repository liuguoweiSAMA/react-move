import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
import '../styles/rem.js'
import '../styles/reset.css'
import '../styles/main.css'
import {Show} from '../component/show.js'
import {Me} from '../component/me.js'
import '../assets/icon/iconfont.css'
import {To} from '../component/to.js'
class App extends Component{
  render() {
    return (
    	<Router>
	      <div className="App">
	      <div className="All">
	       	<Route exact  path='/' component={Show} ></Route>
	       	<Route path='/show' component={Show} ></Route>
	       	<Route path='/me'  component={Me} ></Route>
	       	<Route path='/to/:id' component={To} ></Route>
	       </div>
	       <div className="foot">
	      	 <span>	<NavLink to='/show' activeClassName="selected">
	      	 <i className='iconfont icon-wode'></i>
	      	 <p> 首页</p>
	      	 </NavLink> </span>
	       	 <span>
	       	 <NavLink to='/me' activeClassName="selected">
	       	 <i className='iconfont icon-dianying'></i>
	       	 <p> 我的</p>
	       	 </NavLink> </span>
	        </div>
	      </div>
      </Router>
    );
  }
}

export default App;
