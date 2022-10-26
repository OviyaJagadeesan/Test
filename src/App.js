import CreateSparrow from './Components/CreateSparrow/CreateSparrow';
import DecisionRequired from './Components/DecisionRequired/DecisionRequired';
import SparrowListing from './Components/SparrowListing/SparrowListing';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<CreateSparrow/>}/>
        <Route path='/dec' element={<DecisionRequired/>}/>
        <Route path='/spr-list' element={<SparrowListing/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
