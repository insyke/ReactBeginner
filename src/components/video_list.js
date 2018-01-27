// doesn't need any state so keep it as plain functional component 
import React from 'react'; 
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});
	return ( // stay away from for loops use built in iterators instead
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList; 