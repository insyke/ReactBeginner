import React from 'react'; 

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	// const url ='http://www.youtube.com/embed/'+videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;
	return (
		<div calssName="video-detail col-md-8">
			<div calssName="embed-responsive embed-responsive-16by9">
				<iframe calssName="embed-responsive-item" src={url}></iframe>
			</div>
			<div calssName="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}; 

export default VideoDetail;