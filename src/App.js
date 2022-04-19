import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Card from './Component/Card/Card';
import Details from './Component/Details/Details';
import Header from './Component/header/Header';
function App() {
  const [id, setId] = useState('tt0111161');

  // const changeId = (ids) => {
  //   setId(ids);
  // };
  return (
    <div className='App'>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Card changeId={changeId} />}></Route>
          <Route path='/details' element={<Details id={id} />}></Route>
        </Routes>
      </BrowserRouter> */}
      
      <Header />
    </div>
  );
}

export default App;