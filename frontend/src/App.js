import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Studentn from './Studentn';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentn />} />
          <Route path='/create' element={<CreateStudent />}
           />
          <Route path='/update/:id' element={<UpdateStudent /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
