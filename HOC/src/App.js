import React, { Component } from 'react';
import withSecretToLife from './withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
)

const App = withSecretToLife(DisplayTheSecret);

export default App;
