import React,{Component} from 'react';
class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			ErrorState:false
		}
	}
	componetDidCatch(){
		this.setstate({ErrorState:true})
	}
	render(){
		if(this.state.ErrorState){
			return <h1 className='f-3 tc'>Oops Could not Load Contents.Try Again Later</h1>
		}
		return this.props.children;
	}
}
export default ErrorBoundary;