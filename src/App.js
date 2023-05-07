import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/Sidebar'
import Userlist from './pages/home/Userlist'
import User from './pages/home/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/newProduct/Product';
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
            <Userlist />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
