import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from './CountUp';
import Number from './Number';
import MyComponent from '.?number';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0,
      propVal : 0,
      stateVal : 0,
      isComponent :false
    };
    this.countUp = this.countUp.bind(this);
    this.incrementState = this.incrementState.bind(this);
    this.incrementProps = this.incrementProps.bind(this);
    this.ｍountComponent = this.ｍountComponent.bind(this);
  }

  countUp() {
    this.setState({ count: this.state.count + 1 });
  }

  incrementState(){
    this.setState({
      stateVal : this.state.stateVal+1
    });
  }
  componentWillMount(){
    console.log("コンポーネントのマウント前")
  }
  componentDidMount(){
    console.log("コンポーネントのマウント後")
  }
  componentWillReceiveProps(){
    console.log("コンポーネントが受け取るpropsが変化")
  }
  shouldComponentUpdate(){
    console.log("コンポーネントがアップデートされる前1")
    return true;
  }
  componentWillUpdate(){
    console.log("コンポーネントがアップデートされる前2")
  }
  componentDidUpdate(){
    console.log("コンポーネントがアップデートされた後")
  }
  componentWillUnmount(){
    console.log("コンポーネントがアンマウントされた後")
  }

  incrementProps(){
    this.setState({
      propVal : this.state.propVal+1
    });
}

  ｍountComponent(){
    this.setState({
      isComponent : !this.state.isComponent
    });
}

  render() {
    
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to React</h1>
         </header>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
         <CountUp 
          count={this.state.count}
          countUp={this.countUp}
         />
         <Number
          propVal={this.state.propVal}
          stateVal={this.state.stateVal}
          incrementState={this.incrementState}
         />
         <MyComponent
          ｍountComponent={() => this.ｍountComponent}
          incrementProps={() => this.incrementProps}
         />
         
       </div>
     );
   }
  
}
// またコールバック関数として実行する際にちゃんと関数内の「this」が機能するように、
// constructor()内でthisをbindしておく必要があります。

export default App;
