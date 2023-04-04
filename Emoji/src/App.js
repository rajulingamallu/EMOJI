// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Emoji from './components/Emoji';
import FileUpload from './components/Upload';
// import FileUpload from './components/fileUpload';
// import Login from './Components/Login';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    <Switch>
    <Route path='/emoji' element={<Emoji/>}/>
    <Route path='/fileupload' element={<FileUpload/>}/>
    </Switch>
     </BrowserRouter></>
  ); 
}

export default App;
