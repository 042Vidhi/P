
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import ProjectIdeas from './Components/ProjectIdeas/ProjectIdeas';
import FAQs from './Components/FAQs/FAQs';
import Create from './Components/Create/Create';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/ideas">
            <ProjectIdeas/>
          </Route>
          <Route path="/faqs">
            <FAQs/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
