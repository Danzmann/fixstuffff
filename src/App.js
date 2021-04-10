import logo from './logo.svg';
import './App.css';
import ansi2html from './ansi2html'

function App() {
  let h1, h2
  h1 = performance.now()
  ansi2html("[1111111111111111111111;0000000000000000000000")
  h2 = performance.now()
  console.log(h2 - h1)

  h1 = performance.now()
  ansi2html("[1111111111111111111111;0000000000000000000000000000")
  h2 = performance.now()
  console.log(h2 - h1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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

export default App;
