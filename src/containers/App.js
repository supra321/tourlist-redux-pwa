import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Placelists} from '../components/Placelists';
import Placeset from '../components/Placeset';
import './App.css'
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Searchbar from '../components/Searchbar';
import Searchbar1 from '../components/Searchbar1';
import ErrorBoundary from './ErrorBoundary';
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
	componentDidMount() {
    	this.props.onFetchPlacelist();
  	}
	render(){
		const {searchBarDestination,searchBarState,onSearchChangeDestination,onSearchChangeState,placelists,isPending}=this.props;
		console.log(placelists);
		const filteredplaces=Placelists.filter(placelist=>{
			return placelist.destination.toLowerCase().includes(searchBarDestination.toLowerCase())&&placelist.state.toLowerCase().includes(searchBarState.toLowerCase());
		})
		return (
			<div className='tc'>
				<Header />
				<Searchbar1 onSearchChange={onSearchChangeState} />
				<Searchbar onSearchChange={onSearchChangeDestination} />
				<br/>
				<br/>
				<Scroll>
					{
						isPending?<h1 className='f-3 tc'>Loading Please Wait!!!</h1>:
						<ErrorBoundary>
							<Placeset Placelists={filteredplaces} />
						</ErrorBoundary>
					}
				</Scroll>
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);