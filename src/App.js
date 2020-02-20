import React from 'react';
import NewPost from './components/NewPost.jsx';
import Feed from './components/Feed.jsx';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFeed: []
    };
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleAddNewPost(newPost) {
    let newMasterFeed = this.state.masterFeed.slice();
    newMasterFeed.push(newPost);
    this.setState({masterFeed: newMasterFeed});
  }

  handleUpVote(id) {
    let newMasterFeed = this.state.masterFeed.slice();
    newMasterFeed.forEach(function(post) {
      if (post.id == id) {
        post.upvote ++;
      }
    });
    this.setState({masterFeed: newMasterFeed});
  }

  handleDownVote(id) {
    let newMasterFeed = this.state.masterFeed.slice();
    newMasterFeed.forEach(function(post) {
      if (post.id == id) {
        post.downvote ++;
      }
    });
    this.setState({masterFeed: newMasterFeed});
  }

  render() {
    return (
      <div>
        <NewPost onAddNewPost={this.handleAddNewPost} />
        <Feed feed={this.state.masterFeed}
        onUpVote={this.handleUpVote}
        onDownVote={this.handleDownVote} />
      </div>
    );
  }
}

export default App;
