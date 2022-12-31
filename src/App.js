import React, { Component, Fragment } from "react";
import NotePage from "./pages/NotePage";
import {  Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';

class App extends Component {
  state = {
    showComponent: true
  }

  render(){
    return(
        <Fragment>
          <Routes>
            <Route path="*" element={<NotePage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
          </Routes>
        </Fragment>
    )
  }
}

export default App;