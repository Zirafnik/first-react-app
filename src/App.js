import React, {Component} from 'react';
import FunctionalComponent from './FunctionalComponent';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  onClickBtn() {
    console.log('Button was clicked. YAY');
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <MyComponent title="First React App" onButtonClicked={this.onClickBtn}/>
        <p>{this.state.count}</p>
        <button onClick={this.countUp}>Count Up!</button>

        <FunctionalComponent title="My Second Component Right here"></FunctionalComponent>
      </div>
    );
  }
}

export default App;
