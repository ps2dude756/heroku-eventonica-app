import React, { Component } from "react";
import Header from './Components/Header'
import EventsList from './Components/EventsList'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends React.Component {
  render() {
    return (
      <div className="list">
        <Header branding="Welcome to Eventonica" />
        <EventsList />
      </div>
    )
  }
}

export default App