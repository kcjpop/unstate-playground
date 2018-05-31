import React, { Component } from 'react'
import { Provider } from 'unstated'
import PostList from './modules/posts/List'
import PostStore from './modules/posts/store'
import UserStore from './modules/users/store'

class App extends Component {
  constructor(props) {
    super(props)
    this.userStore = new UserStore()
    this.postStore = new PostStore()
  }

  componentDidMount() {
    this.userStore.get().then(this.postStore.get)
  }

  render() {
    return (
      <Provider inject={[this.userStore, this.postStore]}>
        <PostList />
      </Provider>
    )
  }
}

export default App
