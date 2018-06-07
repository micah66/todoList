class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoItems: ['ToDo 1', 'ToDo 2', 'ToDo 3'],
      doneItems: ['Done 1', 'Done 2', 'Done 3']
    }
  }

  toggleList (e) {
    let listItem = e.target.attributes.todo.value
    if (this.state.doneItems.indexOf(listItem) === -1) {
      let listItemIndex = this.state.toDoItems.indexOf(listItem)
      listItem = this.state.toDoItems.splice(listItemIndex, 1)[0]
      this.state.doneItems.push(listItem)
    } else {
      let listItemIndex = this.state.doneItems.indexOf(listItem)
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

  deleteItem (e) {
    let listItem = e.target.attributes.todo.value
    if (this.state.doneItems.indexOf(listItem) === -1) {
      let listItemIndex = this.state.toDoItems.indexOf(listItem)
      listItem = this.state.toDoItems.splice(listItemIndex, 1)[0]
    } else {
      let listItemIndex = this.state.doneItems.indexOf(listItem)
      listItem = this.state.doneItems.splice(listItemIndex, 1)[0]
    }
    this.setState({
      toDoItems: this.state.toDoItems,
      doneItems: this.state.doneItems
    })
    // ReactDOM.unmountComponentAtNode(document.getElementById(e.target.parentElement.id))
  }
  componentWillUnmount () {
    // console.log('unmount')
  }
  render () {
    return (
      <div>
        <h1 id='title'>The Husband List</h1>
        <div id='inputAddToDo'>
          <input ref={input => { this.inputText = input }} type='text' id='addToDo' />
          <button className='btn' id='addBtn' onClick={this.addToDo.bind(this)}>Add ToDo</button>
        </div>
        <List class='btn' id='toDoList' heading={'Things my wife told me to do:'} counter={1} items={this.state.toDoItems} btnText='Stop Nagging' handleToggleList={this.toggleList.bind(this)} handleDelete={this.deleteItem.bind(this)} />
        <List class='btn' id='doneList' heading={'Things my wife can stop telling me to do:'} counter={this.state.toDoItems.length + 1} items={this.state.doneItems} btnText='Nag Again' handleToggleList={this.toggleList.bind(this)} handleDelete={this.deleteItem.bind(this)} />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    return (
      <div id={this.props.id}>
        <h3>{this.props.heading}</h3>
        <ul className='list'>
          {this.props.items.map((item, index) => <li id={'item' + (index + this.props.counter)}>{item}<button className={this.props.class + ' toggleBtn'} onClick={this.props.handleToggleList} todo={item}>{this.props.btnText}</button><button className={this.props.class + ' deleteBtn'} onClick={this.props.handleDelete} todo={item} /></li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
