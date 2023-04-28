import picture from './pictures.jpg';
import './App.css';

function App() {
  return (
    <div >
        <h1 className="App">Vishnu Loves Visalini</h1>
        <div className="picture">
        <img src={picture} alt="vishnu" style={{"width":"50%"}}/>
        </div>
    </div>
  );
}

export default App;
