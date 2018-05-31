import React from 'react'
import { Subscribe, Provider } from 'unstated'
import PostStore from './store'
import UserStore from '../users/store'

export default class extends React.Component {
  getAuthorName = (store, id) => {
    const u = store.state.byId[id]
    return u ? u.name : 'Annonymous'
  }

  render() {
    return (
      <div className="flex flex-wrap sans-serif">
        <Subscribe to={[PostStore, UserStore]}>
          {(posts, users) =>
            posts.state.list.map(post => (
              <article key={post.id} className="w-100 w-50-m w-25-l">
                <div className="br2 ma2 pa3 bg-gold dark-gray">
                  <h1 className="f2">{post.title}</h1>
                  <em className="fw7 dark-green">{this.getAuthorName(users, post.userId)}</em>
                  <p className="lh-copy">{post.body}</p>
                </div>
              </article>
            ))
          }
        </Subscribe>
      </div>
    )
  }
}
