import './App.css';
import PageHeader from './components/_header';
import AboutPage from "./pages/about.js";
import Index from "./pages/index";
import ItemDetail from './components/_itemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
      <Router>

        <div className="App">

        <PageHeader/>

        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/:id" component={ItemDetail} />
        </Switch>

        </div>

      </Router>

  );
}

export default App;
