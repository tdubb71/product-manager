import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Show from './views/Show';

function App() {
  return (
    <div className="App">
        <Router>
            <Main path='/' />
            <Show path='/show/:id' />
        </Router>
    </div>
  );
}

export default App;
