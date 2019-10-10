import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
//import Footer from './layouts/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

class App extends React.Component {
  state = {
    users: [
      {id:1, name:'Chinedu Emesue', email:'edu@gmail.com', password:'qwerty'}
    ]
  }

  registerUser = (newUser) => {
    const user = [...this.state.users, newUser];
    this.setState({
      users: user
    });
  }

  loginUser = (info) => {
   this.state.users.forEach( (chk) => {
      if(chk.email === info.email && chk.password === info.password){
        console.log('User found!')
        alert("Welcome " + chk.name)
      }else{
        console.log('User not found!')
        alert("Email or Password is incorect!")
      }
   })
  }
  
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/register" render={ () => <Register registerUser={this.registerUser} /> } />
        <Route path="/login" render={ () => <Login loginUser={this.loginUser} /> } />
        <Route path="/about" component={About} />
      
    </div>
    </BrowserRouter>
  );
}
}
export default App;
