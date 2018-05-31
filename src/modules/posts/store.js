import axios from 'axios'
import { Container } from 'unstated'

export default class extends Container {
  state = {
    list: [],
    byId: {}
  }

  get = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
      this.setState({ list: data })
    })
  }
}
