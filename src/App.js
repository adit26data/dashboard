import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
