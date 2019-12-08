import React, { Component } from 'react';
import moment from 'moment';
//import './App.css';
import Calendar from './components/Calendar';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
      <header>{moment().format("Y")}</header>
      <Calendar key={1} date={moment()} year="2019" month = {12} />
      </div>

    )

  }
}

export default App;
