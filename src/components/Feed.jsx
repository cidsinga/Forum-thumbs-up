import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Feed(props) {
console.log(props.feed);
  return (
    <div>
      {props.feed.map((post) =>
        <Post content={post.content}
        key={post.id} />
      )}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array
};

export default Feed;
