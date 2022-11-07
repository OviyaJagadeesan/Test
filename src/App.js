import CreateSparrow from './Components/CreateSparrow/CreateSparrow';
import DecisionRequired from './Components/DecisionRequired/DecisionRequired';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import DetailsView from './Components/DetailsView/DetailsView';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<CreateSparrow/>}/>
        <Route path='/dec' element={<DecisionRequired/>}/>
        <Route path='/details' element={<DetailsView/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
