import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="heroic__header">
      <div className="container">
      <Header/>
        
      </div>

      </div>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
