import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
//import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/review/About';
import Home from './components/dashboard/Home'
import CreateContact from './components/contact/createContact'
import ReadContact from './components/contact/readContact'
import SingleContact from './components/contact/singleContact'
import UpdateContact from './components/contact/updateContact'
import Dashboard from './components/dashboard/Dashboard';


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={CreateContact} />
        <Route exact path="/contacts" component={ReadContact} />
        <Route exact path="/contacts/:id" component={SingleContact} />
        <Route path="/contacts/:id/edit" component={UpdateContact} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
