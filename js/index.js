class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoItems: [],
      doneItems: []
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

  addToDo () {
    if (this.state.toDoItems.indexOf(this.inputText.value) === -1 && this.state.doneItems.indexOf(this.inputText.value) === -1) {
      this.state.toDoItems.push(this.inputText.value)
      this.setState({
        toDoItems: this.state.toDoItems
      })
    }
  }

  render () {
    return (
      <div>
        <input ref={input => { this.inputText = input }} type='text' />
        <button onClick={this.addToDo.bind(this)}>Add ToDo</button>
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
