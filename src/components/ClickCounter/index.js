// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1}
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div className="centers">
        <h1>The Button Has Been Clicked {counter} Times</h1>
        <p>Click the button to increment the counter</p>
        <button onClick={this.onIncrement}>Cick Me</button>
      </div>
    )
  }
}

export default ClickCounter
