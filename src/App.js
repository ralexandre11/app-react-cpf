import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import MyProvider from './context/MyProvider';
import Welcome from './pages/Welcome';
import FormCpf from './components/FormCpf';
import NotFound from './pages/NotFound';
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/cpf/:id/edit" component={ FormCpf } />
          <Route exact path="/cpf/new" component={ FormCpf } />
          <Route exact path="/main" component={ Main } />
          <Route exact path="/" component={ Welcome } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
