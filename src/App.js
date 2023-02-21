import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSec from './components/NewsSec';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<NewsSec key="genera" pageSize={6} country="in" category="general"/>}></Route>
            <Route exact path="/entertainment" element={<NewsSec key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<NewsSec key="general" pageSize={6} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<NewsSec key="health" pageSize={6} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<NewsSec key="science" pageSize={6} country="in" category="science"/>}></Route>
            <Route exact path="/about" element={<NewsSec key="sports" pageSize={6} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<NewsSec key="technology" pageSize={6} country="in" category="technology"/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}