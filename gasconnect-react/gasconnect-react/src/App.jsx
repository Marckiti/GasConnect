import './App.css';
import Header from './components/header/Header.jsx'; // Importa el Header
import Main from './components/main/Main.jsx';     // Importa el Main

function App() {
  return (
    <div className="App">
      {/* Aquí "ensamblamos" la página */}
      <Header />
      <Main />
      
      {/* Podrías añadir un Footer aquí también */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;