import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom'
import {Star} from './star.js'
export  class Show extends Component{
	constructor(props){
		super(props)
		this.state={
			arr:[],
			arr1:[],
			arr2:[],
			arr3:[],
			arr4:[]
		}
	}
  render() {
  	console.log(this.state.arr)
    return (
    		<div className='section'>
    		<div>
    				全部
    				<ul className='one'>
    					{
    						
    						this.state.arr3.map((res,index)=>{
    							return <li key={index} className='font'>
    							<Link to={`/to/${res.id}`}>
    							<img src={`http://vue.wclimb.site/images/${res.img}`} alt='11'/>
    							{res.name}
    							<Star num={res.star}/>{res.star}
    							</Link>
    							</li>
    						})
    					}
    				</ul>
    			</div>
    			<div>
    				电影
    				<ul className='one'>
    					{
    						
    						this.state.arr.map((res,index)=>{
    							return <li key={index} className='font'>
    							<Link to={`/to/${res.id}`}>
    							<img src={`http://vue.wclimb.site/images/${res.img}`} alt='11'/>
    							{res.name}
    							<Star num={res.star}/>{res.star}
    							</Link>
    							</li>
    						})
    					}
    				</ul>
    			</div>
    			<div>
    				电视剧
    				<ul className='one'>
    					{
    						
    						this.state.arr1.map((res,index)=>{
    							return <li key={index} className='font'>
    							<Link to={`/to/${res.id}`}>
    							<img src={`http://vue.wclimb.site/images/${res.img}`} alt='11'/>
    							{res.name}
    							<Star num={res.star}/>{res.star}
    							</Link>
    							</li>
    						})
    					}
    				</ul>
    			</div>
    			<div>
    				综艺
    				<ul className='one'>
    					{
    						
    						this.state.arr2.map((res,index)=>{
    							return <li key={index} className='font'>
    							<Link to={`/to/${res.id}`}>
    							<img src={`http://vue.wclimb.site/images/${res.img}`} alt='11'/>
    							{res.name}
    							<Star num={res.star}/>{res.star}
    							</Link>
    							</li>
    						})
    					}
    				</ul>
    			</div>
    			
    		</div>
    	)
    }
  componentDidMount(){
  		axios.get("http://vue.wclimb.site/vi/list").then((res)=>{
  			this.setState({
  				arr:res.data.data[0],
  				arr1:res.data.data[1],
				arr2:res.data.data[2],
				arr3:res.data.data[3],
  			})
  		})
 	 }
  }