import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import './Sidebar.css';
// @ts-ignore
import Page1 from "./pages/Page-1.tsx";
// @ts-ignore
import Page2 from "./pages/Page-2.tsx";
// @ts-ignore
import Page3 from "./pages/Page-3.tsx";


export default (props: any) => {
  return (
    <Menu>
        <Router>
            <Routes>
                <Route path="/" element={Page1} />
                <Route path="Page-2" element={Page2} />
                <Route path="Page-3" element={Page3} />
            </Routes>
      </Router>
    </Menu>
  );
};