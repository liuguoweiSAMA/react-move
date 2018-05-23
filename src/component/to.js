import React, { Component } from 'react';
import axios from 'axios'
export  class To extends Component{
	constructor(props){
		super(props)
		this.state={
			name:[],
			name1:[]
		}
	}
  render() {
  	console.log(this.state.name1)
    return (
    	<div>
    		<div className='img'><img src={`http://vue.wclimb.site/images/${this.state.name.img}`} alt='111'/>
    		{this.state.name.name}
    		
    		</div>
    		<ol>
    		{
    			this.state.name1.map((res,index)=>{
    			return <li>{res.userName} :{res.content}</li>
    		})
    			}
    		</ol>
    	</div>
    )
    }
  componentDidMount(){
  	var id=this.props.match.params.id
  	var url="http://vue.wclimb.site/vi/getVideoById"
  	var url1="http://vue.wclimb.site/vi/getVideoComment"
  	var data='videoId='+id
  	axios.post(url,data).then((res)=>{
  		this.setState({
  			name:res.data.data[0][0],
  		})
  	})
  	axios.post(url1,data).then((res)=>{
  		this.setState({
  			name1:res.data.data
  		})
  	})
  }
  }