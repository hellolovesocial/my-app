import React, { Component } from 'react';
//コンポーネントの作成
class Number extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     stateVal : 0
  //   };
  //   this.incrementState = this.incrementState.bind(this)
  // }
  //Stateの加算
  // incrementState(){
  //     this.setState({
  //       stateVal : this.state.stateVal+1
  //     });
  // }
  // componentWillMount(){
  //   console.log("コンポーネントのマウント前")
  // }
  // componentDidMount(){
  //   console.log("コンポーネントのマウント後")
  // }
  // componentWillReceiveProps(){
  //   console.log("コンポーネントが受け取るpropsが変化")
  // }
  // shouldComponentUpdate(){
  //   console.log("コンポーネントがアップデートされる前1")
  //   return true;
  // }
  // componentWillUpdate(){
  //   console.log("コンポーネントがアップデートされる前2")
  // }
  // componentDidUpdate(){
  //   console.log("コンポーネントがアップデートされた後")
  // }
  // componentWillUnmount(){
  //   console.log("コンポーネントがアンマウントされた後")
  // }
  render() {
    return (
      <div>
        <p>props:{this.props.propVal}</p>
        <p>state:{this.props.stateVal}</p>
        <button type="button"  onClick={() => this.props.incrementState()}>Stateの加算</button>
      </div>
    )
  }
}

class MyComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     propVal : 0,
  //     isComponent :false
  //   };
  //   this.incrementProps = this.incrementProps.bind(this);
  //   this.ｍountComponent = this.ｍountComponent.bind(this);
  // }
  //propsの加算
  // incrementProps(){
  //     this.setState({
  //       propVal : this.state.propVal+1
  //     });
  // }
  
  // ｍountComponent(){
  //     this.setState({
  //       isComponent : !this.state.isComponent
  //     });
  // }
  render() {
    return (
      <div>
        <button onClick={() => this.props.ｍountComponent()}>Numberコンポーネントのマウント切り替え</button>
        <br />
        {/* {(() => {
          if (this.props.isComponent) {
            return <Number propVal={this..propVal} />;
          }else{
            return null
          }
        })()} */}
        <button onClick={() => this.props.incrementProps()} >propsの加算</button>
        <br />
        
      </div>
    )
  }
}

export default Number;
export default MyComponent;
 //コンポーネントの描画
// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('app')
// );