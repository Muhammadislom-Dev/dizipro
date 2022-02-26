import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../src/Components/Header/Header.css'
import '../src/Components/Section/Section.css'
import Header from './Components/Header/Header';
import Section  from './Components/Section/Section';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/header">
               <Header /> 
            </Route>
            <Route path="/">
              <Section />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
