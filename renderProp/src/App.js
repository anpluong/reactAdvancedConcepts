import React from 'react';

 const SECRET_TO_LIFE = "Hello world";

class ShareSecretToLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mySecret: "hello world"
    }
  }

  render() {
    return (
      <div>
       {/* {this.props.render(this.state.mySecret)} */}
       {this.props.render({mySecret: SECRET_TO_LIFE})}
      </div>
    );
  }
}

const App = () => (
  <ShareSecretToLife 
    render={({mySecret}) => (
      <h1>
        <b>{mySecret}</b>
      </h1>
    )}
  />
);

// class SharedComponentWithGoofyName extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.wrapThisThingInADiv()}
//       </div>
//     );
//   }
// }

// const SayHelloWithGoofyName = () => (
//   <SharedComponentWithGoofyName wrapThisThingInADiv={() => (
//     <span>hello!</span>
//   )} />
// );


export default App;
