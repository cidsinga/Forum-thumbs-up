import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

  return (
    <div>
      <p>{props.content}</p>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.string.isRequired
};

export default Post;
