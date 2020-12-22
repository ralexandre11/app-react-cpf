import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import MyProvider from './context/MyProvider';
import NotFound from './pages/NotFound';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
