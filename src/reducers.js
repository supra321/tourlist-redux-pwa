import {CHANGE_SEARCH_FIELD_STATE,
	CHANGE_SEARCH_FIELD_DESTINATION,
	REQUEST_PLACELIST_PENDING,
	REQUEST_PLACELIST_SUCCESS,
	REQUEST_PLACELIST_FAILED} from './constants';

const initialStateSearch={
	searchBarDestinationState:'',
	searchBarStateState:''
}

export const searchPlace=(state=initialStateSearch,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD_STATE:
			return Object.assign({},state,{searchBarStateState:action.payload});
		case CHANGE_SEARCH_FIELD_DESTINATION:
			return Object.assign({},state,{searchBarDestinationState:action.payload});
		default:
			return state;
	}
}

const initialStatePlacelist={
	placelistState:[],
	isPending:true,
	error:''
}

export const placelist=(state=initialStatePlacelist,action={})=>{
	switch(action.type){
		case REQUEST_PLACELIST_PENDING:
			return Object.assign({},state,{isPending: true});
		case REQUEST_PLACELIST_SUCCESS:
			return Object.assign({},state,{isPending: false,placelistState: action.payload});
		case REQUEST_PLACELIST_FAILED:
			return Object.assign({},state,{error: action.payload,isPending: false})
		default:
			return state;
	}
}