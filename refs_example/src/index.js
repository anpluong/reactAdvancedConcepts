import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef()
  }


  handleClick() {
    console.log( this.myRef.current)
    this.myRef.current.value = "aaa";
  }

  render() {
    return (
      <div>
        <button style={{textAlign: 'center'}} onClick={this.handleClick}>An</button>
        <input ref = {this.myRef} id='an'></input>
      </div>

    )
  }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );