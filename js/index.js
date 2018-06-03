class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toDoItems: [],
      doneItems: []
    }
  }
  toggleList (e) {
    let listItem = document.getElementById(e.target.parentElement.id)
    let listItemText = listItem.children[0].innerHTML
    if (this.state.doneItems.indexOf(listItemText) === -1) {
      let listItemIndex = this.state.toDoItems.indexOf(listItemText)
      listItemText = this.state.toDoItems.splice(listItemIndex, 1)[0]
      this.state.doneItems.push(listItemText)
    } else {
      let listItemIndex = this.state.doneItems.indexOf(listItemText)
      listItemText = this.state.doneItems.splice(listItemIndex, 1)[0]
      this.state.toDoItems.push(listItemText)
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
    let listItem = e.target.parentElement.children[0].textContent
    if (this.state.doneItems.indexOf(listItem) === -1) {
      let listItemIndex = this.state.toDoItems.indexOf(e.target.parentElement.children[0].textContent)
      listItem = this.state.toDoItems.splice(listItemIndex, 1)[0]
    } else {
      let listItemIndex = this.state.doneItems.indexOf(e.target.parentElement.children[0].textContent)
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
        <input ref={input => { this.inputText = input }} type='text' id='addToDo' />
        <button className='btn' id='addBtn' onClick={this.addToDo.bind(this)}>Add ToDo</button>
        <List class='btn' id='toDoList' heading={'Things my wife told me to do:'} counter={0} items={this.state.toDoItems} btnText='Stop Nagging' handleToggleList={this.toggleList.bind(this)} handleDelete={this.deleteItem.bind(this)} />
        <List class='btn' id='doneList' heading={'Things my wife can stop telling me to do:'} counter={this.state.toDoItems.length} items={this.state.doneItems} btnText='Nag Again' handleToggleList={this.toggleList.bind(this)} handleDelete={this.deleteItem.bind(this)} />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    return (
      <div id={this.props.id}>
        <h3>{this.props.heading}</h3>
        <ul>
          {this.props.items.map((item, index) => <li id={index + this.props.counter}><span>{item}</span><button className={this.props.class} onClick={this.props.handleToggleList}>{this.props.btnText}</button><button className={this.props.class} onClick={this.props.handleDelete}>X</button></li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
