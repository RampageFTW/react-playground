import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';


const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)


function App() {
  class TheDate extends React.Component {
    constructor(props) {
      super(props)
      this.state = { datetime: new Date() };
      console.log('constructor')
      }
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            datetime:  new Date()
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }

    render() {
      console.log('render')
      return (
        <div>{this.state.datetime.toLocaleString()}</div>
      )
    }
  }

  class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    handleButtonClick = () => {
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
          Add 1
          </button>
        </div>
      )
    }
  }

  return (
    <div>
    <TheDate></TheDate>
    <Counter count={123} />
    <HelloWorld></HelloWorld>
    </div>
  )
  }

  export default App;
