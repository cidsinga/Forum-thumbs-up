import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPost(props) {
  let _content = null;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPost({content: _content.value, id: v4()});
    _content.value = '';
  }

  const newPostStyle = {
    padding: '1em',
    backgroundColor: 'lightgrey',
    borderTop: '4px solid white',
    borderBottom: '4px solid darkgrey',
  }
  return (
    <div style={newPostStyle}>
      <form onSubmit={handleNewPostSubmission}>
        <input
        type='text'
        id='content'
        placeholder="What's on your mind?"
        ref={(input) => {_content = input;}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onNewPost: PropTypes.func
};

export default NewPost;
