import React, { Component } from 'react';

const Book = (props) => (
  <div>
    Current Book: {props.book}
  </div>
)

class ErrorBoundary extends Component {
  constructor() {
    super() 
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <div>Oh No, something went wrong</div>
    } else {
        return this.props.children
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: "ulysses"
    }
  }

  updateBook = () => {
    this.setState({book: null});
  }

  render() { 
    return (
      <div>
          <ErrorBoundary>
            <Book book={this.state.book} />
            <button onClick={this.updateBook}>Update</button>
          </ErrorBoundary>
      </div>
    )
  }
}

export default App;
