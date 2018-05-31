import axios from 'axios'
import { Container } from 'unstated'

export default class extends Container {
  state = {
    list: [],
    byId: {}
  }

  get = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
      const byId = data.reduce((acc, x) => ({ ...acc, [x.id]: x }), {})
      this.setState({ list: data, byId })
    })
  }
}
