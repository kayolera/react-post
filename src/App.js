import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
    posts: [
      {
        id:1,
        title: "titulo do post 1",
        body: "corpo do post 1"
      },
      {
        id:2,
        title: "titulo do post 2",
        body: "corpo do post 2"
      },
      {
        id:3,
        title: "titulo do post 3",
        body: "corpo do post 3"
      }
    ]
  }

 

  render(){
    const {posts} = this.state;
    return (
     
      <div className="App">
      
      {
        posts.map( (post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      }
      
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
