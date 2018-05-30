class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [<Lists todo={'Micah'} />, <Lists todo={'Alyssa'} />, <Lists todo={'Maverick'} />, <Lists todo={'Ezra'} />, <Lists todo={'Shiri'} />]
    }
  }
  addToDo () {
    const newToDo = <Lists todo={this.textInput} />
    this.setState({
      list: this.state.list.push(newToDo)
    })
  }
  render () {
    return (
      <div>
        <h1>The Ultimate ToDo List App</h1>
        <input ref={input => { this.textInput = input }} type='text' />
        <button onClick={this.addToDo.bind(this)} >Add ToDo</button>
        {this.state.list}
      </div>
    )
  }
}

class Lists extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDone: false
    }
  }

  toggleDone () {
    this.setState({
      isDone: !this.state.isDone
    })
    console.log('Done')
  }

  render () {
    return (
      <div>
        {this.state.isDone ? <DoneList handleChange={this.toggleDone.bind(this)} todo={this.props.todo} /> : <TodoList handleChange={this.toggleDone.bind(this)} todo={this.props.todo} /> }
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor (props) {
  	super(props)
  }
  render () {
    return (
      <div>
        {this.props.todo}
        <button onClick={this.props.handleChange} >Done</button>
      </div>
    )
  }
}

class DoneList extends React.Component {
  render () {
    return (
      <div>
        {this.props.todo}
        <button onClick={this.props.handleChange} >Add to ToDo List</button>
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
