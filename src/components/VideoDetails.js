import React, { Fragment } from "react";

const VideoDetails = ({ video }) => {
  return (
    <Fragment>
      {video ? (
        <div>
          <div className="ui embed">
            <iframe
              title="Videoplayer"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default VideoDetails;
