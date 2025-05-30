import './App.css'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h3>RecipeJar</h3>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      
      
      
      
      
      </BrowserRouter>
      










    </div>
  );
}

export default App
