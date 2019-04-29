import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }
  componentWillMount() {
    console.log('by component will Mount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({post: data}))
  }

  render() {
    const postItem = this.state.post.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    )
  }
}

export default Posts