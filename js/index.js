class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listItems: ['todo1', 'todo2', 'todo3']
    }
  }
  render () {
    return (
      <List todos={this.state.listItems} />
    )
  }
}

class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.todos.map((todo, index) => <li key={index}>todo<button>Done</button></li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
