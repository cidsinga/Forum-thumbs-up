import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPost(props) {
  let _content = null;

  function handleSubmitNewPost(event) {
    event.preventDefault();
    props.onAddNewPost({content: _content.value, id: v4(), upvote: 0, downvote: 0});
    _content.value = '';
  }

  const styleNewPost = {
    padding: '1em',
    backgroundColor: 'lightgrey',
    borderTop: '4px solid white',
    borderBottom: '4px solid darkgrey'
  }
  return (
    <div style={styleNewPost}>
      <form onSubmit={handleSubmitNewPost}>
        <input
        type='text'
        placeholder="What's on your mind?"
        ref={(input) => {_content = input;}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onAddNewPost: PropTypes.func
};

export default NewPost;
