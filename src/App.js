import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import LinkedList from "./components/LinkedList";
import Queue from './components/Queue';
import Stack from './components/Stack';
import InsertionSort from './components/InsertionSort';
import Recursion from './components/Recursion';

export default function App() {
  return (
    <Router>
      <Navigation/>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/linkedlist' component={LinkedList} />
        <Route path='/queue' component={Queue} />
        <Route path='/stack' component={Stack} />
        <Route path='/insertionsort' component={InsertionSort} />
        <Route path='/recursion' component={Recursion} />
    </Router>
  );
}