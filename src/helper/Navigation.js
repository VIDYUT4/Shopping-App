import AboutUs from 'Pages/AboutUs';
import Dashboard from 'Pages/Dashboard';
import Home from 'Pages/Home';
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Home />}/>
            <Route path="aboutus" element={<AboutUs />}/>
        </Route>
    </Routes>
  }
}