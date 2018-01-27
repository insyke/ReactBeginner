import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBPJAsiacoSsF8_aWpiheSj5RQK8Q7qknY';
// Always do downward data flow, meaning the most parent component should do the search for the date. 
 

 // Make a new component. This component should produce some html
 
 
class App extends Component  { // this is a class not an instance. App could have many instances. To make instance just wrap it in <> (jsx tags)
	// => is equivalent to function 

	constructor (props) {
 	super(props);

 	this.state = {
 		videos: [], 
 		selectedVideo: null
 		};

 		this.videoSearch('surfboards')
 	
 } 

 	videoSearch (term) {
 		YTSearch({key: API_KEY, term: term},  (videos) => {
			this.setState({
				videos : videos, 
				selectedVideo : videos[0]
			}); // gets resolved as this.getState({vidoes: videos}) 
		});	
 	}
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // throttling by 300 ms
		return (
		<div>
			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList  
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} /> 
		</div>);
	}
}
// passing data from app to video_list and this is called props
 // Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
