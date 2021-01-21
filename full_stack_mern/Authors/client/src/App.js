import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import { Router } from '@reach/router'
import Update from './views/Update';

function App() {
  return (
    <Router>
      <Main path="/" />
      <Create path="/author" />
      <Update path="/author/:id" />
    </Router>
  );
}

export default App;
