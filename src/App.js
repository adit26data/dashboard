import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/Sidebar'
import userList from './pages/userList/userList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <userList />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
