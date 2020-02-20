import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

  function onFinalUpVote() {
    props.onUpVote(props.id);
  }

  function onFinalDownVote() {
    props.onDownVote(props.id);
  }

  const stylePost = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '2px solid lightgrey'
  }
  return (
    <div style={stylePost}>
      <p>{props.finalContent}</p>
      <p>{props.finalUpVote}</p>
      <p onClick={onFinalUpVote}><span role='img' aria-label='thumbs-up'>👍🏽</span></p>
      <p>{props.finalDownVote}</p>
      <p onClick={onFinalDownVote}><span role='img' aria-label='thumbs-down'>👎🏽</span></p>
    </div>
  );
}

Post.propTypes = {
  finalContent: PropTypes.string.isRequired,
  finalUpVote: PropTypes.number,
  finalDownVote: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default Post;
