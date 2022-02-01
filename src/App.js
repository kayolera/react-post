import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
    name: '',
    counter: 0
  }

  handlePclick = () => {
    this.setState({name:"kayolera clicou"})
  }

  handleAclick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter+1})
  }

  render(){
    const {name, counter} = this.state;
    return (
     
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p onClick={this.handlePclick}>
           Edit <code>src/App.js</code> and save to reload.
           name: {name}
           <br/>
           counter: {counter}
         </p>
         <a
         onClick={this.handleAclick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
