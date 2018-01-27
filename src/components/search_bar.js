 import React, { Component } from 'react' // have to include all the components for transcompiling 

 class SearchBar extends Component {

 	constructor (props) {
 		super (props);

 		this.state = {term:''}; // create an object which contains properties that you want to record
 	} 

 	render () {
 		return(
 			<div className="search-bar"> 
 			<input 
 				value={this.state.term} // turns it into controlled component which is controlled by state. That means it only changes when the state changes
 				onChange={event => this.onInputChange(event.target.value)} />

 			</div>
 			);
 	} // every class must have a render function

 	onInputChange(term) {
 		this.setState({term});
 		this.props.onSearchTermChange(term); 
 	}
 }

 export default SearchBar;