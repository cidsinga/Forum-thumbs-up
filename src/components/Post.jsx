import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      upVote: 0,
      downVote: 0
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote(vote) {
    let newUpVote = this.state.upVote + 1;
    this.setState({upVote: newUpVote});
  }

  handleDownVote(vote) {
    let newDownVote = this.state.downVote + 1;
    this.setState({downVote: newDownVote});
  }

  render() {
    const postStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottom: '2px solid lightgrey'
    }
    return (
      <div style={postStyle}>
        <p>{this.props.content}</p>
        <p>{this.state.upVote}</p>
        <p onClick={this.handleUpVote}><span role='img'>👍🏽</span></p>
        <p>{this.state.downVote}</p>
        <p onClick={this.handleDownVote}><span role='img'>👎🏽</span></p>
      </div>
    );
  }
}

Post.propTypes = {
  content: PropTypes.string.isRequired
};

export default Post;
