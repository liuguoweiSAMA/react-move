import React, { Component } from 'react';
export  class Star extends Component{
	constructor(props){
		super(props)
		this.state={
			num:null,
			arr:[1,2,3,4,5]
		}
	}
  render() {
    return (
    	<div>
    		{
    			this.state.arr.map((ele,index,arr)=>{
	    			if(ele>this.props.num/2){
	    				return <span key={index}>♔</span>
	    			}else{
	    				return <span key={index}>♚</span>
	    			}
    			})
    		}
    		                                                                                         
    	</div>
   	 )
    }
  }