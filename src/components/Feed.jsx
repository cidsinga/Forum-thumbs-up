import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Feed(props) {

  return (
    <div>
      {props.feed.map((post) =>
        <Post finalContent={post.content}
        finalUpVote={post.upvote}
        finalDownVote={post.downvote}
        onUpVote={props.onUpVote}
        onDownVote={props.onDownVote}
        id={post.id}
        key={post.id} />
      )}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default Feed;
