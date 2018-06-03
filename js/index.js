class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoItems: ['todo1', 'todo2', 'todo3'],
      doneItems: ['done1', 'done2', 'done3']
    }
  }
  toggleList (e) {
    let listItem = e.target.parentElement.children[0].textContent
    if (this.state.doneItems.indexOf(listItem) === -1) {
      let listItemIndex = this.state.toDoItems.indexOf(e.target.parentElement.children[0].textContent)
      listItem = this.state.toDoItems.splice(listItemIndex, 1)[0]
      this.state.doneItems.push(listItem)
    } else {
      let listItemIndex = this.state.doneItems.indexOf(e.target.parentElement.children[0].textContent)
      listItem = this.state.doneItems.splice(listItemIndex, 1)[0]
      this.state.toDoItems.push(listItem)
    }
    this.setState({
      toDoItems: this.state.toDoItems,
      doneItems: this.state.doneItems
    })
  }

  render () {
    return (
      <div>
        <h3>ToDo</h3>
        <List handleClick={this.toggleList.bind(this)} items={this.state.toDoItems} />
        <h3>Done</h3>
        <List handleClick={this.toggleList.bind(this)} items={this.state.doneItems} />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.items.map((item, index) => <li key={index}><span>{item}</span><button onClick={this.props.handleClick}>Done</button></li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
