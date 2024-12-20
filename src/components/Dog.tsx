import React, { Component } from 'react';

class Animal extends Component {
  render() {
    return <h1>I am an animal!</h1>;
  }
}

class Dog extends Animal {
  render() {
    return <h1>I am a dog!</h1>;
  }
}

export default Dog;
