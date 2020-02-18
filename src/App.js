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
    this.handleAddNewPostToFeed = this.handleAddNewPostToFeed.bind(this);
  }

  handleAddNewPostToFeed(newPost) {
    let newMasterFeed = this.state.masterFeed.slice();
    newMasterFeed.push(newPost);
    this.setState({masterFeed: newMasterFeed});
  }

  render() {
    return (
      <div>
        <NewPost onNewPost={this.handleAddNewPostToFeed} />
        <Feed feed={this.state.masterFeed} />
      </div>
    );
  }
}

export default App;
