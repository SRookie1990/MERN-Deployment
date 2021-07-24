import Main from './views/Main';
import ShowUpdated from './views/ShowUpdated';
import Form from './views/Form';
import Fail from './views/Fail'
import Detail from './views/Detail';
import { Router, Redirect } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Router>
        <Redirect from="/" to="/pets" noThrow="true" />
        <ShowUpdated path="/pets/edit/:id" />
        <Detail path="pets/:id" />
        <Form path="/pets/new" />
        {/* bonus feature */}
        <Fail path="/404" />
        <Main path="/pets" />
      </Router>
    </div>
  );
}

export default App;
