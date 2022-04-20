import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Component/Card/Card';
import Details from './Component/Details/Details';
import Page404 from './Component/Page404/Page404.jsx';
import Header from './Component/header/Header';

function App() {
  const [id, setId] = useState({});
  const [pathname, setPathname] = useState('/');

  const changeId = (ids) => {
    setId(ids);
  };

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        {(pathname === '/' || pathname === 'details') && (
          <Header image={id} changeId={changeId} />
        )}
        <Routes>
          <Route exact path='/' element={<Card changeId={changeId} />}></Route>
          <Route path='/details' element={<Details id={id} />}></Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
