import React from 'react';
import { Outlet } from "react-router-dom";
import Home from './Home';


const Dashboard = () => {
  return <div>
      <h1>This is Dashboaed Component</h1>
      <Home/>
      <Outlet />
  </div>;
};

export default Dashboard;
