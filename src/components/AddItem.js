import React, { Component, Fragment } from 'react'
import NewsList from '../components/NewsList'
import mockData from '../mockData'
export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      feed:'',
      title:''
    } 
  }

  componentDidMount() {
    this.load()
  }
 
  load = () => {
    const data = [...this.state.data,...mockData]
    this.setState({ data })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    
  }
  handleSubmit = e => {
    const newData = []
    const {data,title,feed} = this.state
    newData.push({
      id: Date.now(),
      feed,
      title
    })
    const tempData=[...data,...newData]
    this.setState({data:tempData,title:'',feed:''})
    e.preventDefault()
  }
 
  render() {
    const { feed, title } = this.state
    return (
      <Fragment>



      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={feed}
          placeholder="feed"
          type="text"
          name="feed"
        />
        <input
          onChange={this.handleChange}
          value={title}
          placeholder="title"
          type="text"
          name="title"
        />
        <input type="submit" value="Add" />
      </form>

      <NewsList news={this.state.data} />
      </Fragment>
    )
  }
}
