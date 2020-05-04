import React,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import MainPage from '../components/MainPage'
import {searchBarDestination,searchBarState,requestPlacelist} from '../actions';
const mapStateToProps=(state)=>{
	return{
		searchBarDestination: state.searchPlace.searchBarDestinationState,
		searchBarState: state.searchPlace.searchBarStateState,
		placelists: state.placelist.placelistState,
		isPending: state.placelist.isPending,
		error: state.placelist.error
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		onSearchChangeDestination:(event)=>dispatch(searchBarDestination(event.target.value)),
		onSearchChangeState:(event)=>dispatch(searchBarState(event.target.value)),
		onFetchPlacelist:()=>dispatch(requestPlacelist())
	}
}
class App extends Component{
	render(){
		return <MainPage {...this.props} />
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);