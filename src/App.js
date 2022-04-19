import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Card from './Component/Card/Card';
import Details from './Component/Details/Details';

function App() {
  const [id, setId] = useState('');

  const changeId = (ids) => {
    setId(ids);
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Card changeId={changeId} />}></Route>
          <Route path='/details' element={<Details id={id} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
