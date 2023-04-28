import './App.css';

function App() {
  const date=new Date()
  return (
    <div className="App">
        <h1>Time is</h1>{date.toLocaleString()}
    </div>
  );
}

export default App;
