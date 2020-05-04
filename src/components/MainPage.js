import React,{Component} from 'react';
import {Placelists} from './Placelists';
import Placeset from './Placeset';
import './MainPage.css'
import Header from './Header';
import Scroll from './Scroll';
import Searchbar from './Searchbar';
import Searchbar1 from './Searchbar1';
import ErrorBoundary from '../containers/ErrorBoundary';
class MainPage extends Component{
	componentDidMount() {
    	this.props.onFetchPlacelist();
  	}
  	filteredplaces=Placelists=>{
  		return Placelists.filter(placelist=>{
			return placelist.destination.toLowerCase().includes(this.props.searchBarDestination.toLowerCase())&&placelist.state.toLowerCase().includes(this.props.searchBarState.toLowerCase());
		})
  	}
	render(){
		const {onSearchChangeDestination,onSearchChangeState,placelists,isPending}=this.props;
		console.log(placelists);
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
							<Placeset Placelists={this.filteredplaces(Placelists)} />
						</ErrorBoundary>
					}
				</Scroll>
			</div>
		);
	}
}
export default MainPage;