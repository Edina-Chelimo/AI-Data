'use client'
//import { useContext } from 'react';
import Navbar from './NavBar/page';
import Home from './Home/page';
import './globals.css';
//import Login from './components/Login';
//import { AuthContext } from './components/AuthContext';

const Index = () => {

  return (
    <div>
      <Navbar />
      <Home /> 
    </div>
  );
};

export default Index;