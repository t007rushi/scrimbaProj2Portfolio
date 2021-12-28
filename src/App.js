
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
       <footer>
       <Social />
       </footer>
       </header>
    </div>
  );
}

export default App;
