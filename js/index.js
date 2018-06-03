class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoItems: ['todo1', 'todo2', 'todo3'],
      doneItems: ['done1', 'done2', 'done3']
    }
  }
  render () {
    return (
      <div>
        <h3>ToDo</h3>
        <List items={this.state.toDoItems} />
        <h3>Done</h3>
        <List items={this.state.doneItems} />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.items.map((item, index) => <li key={index}>{item}<button>Done</button></li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
