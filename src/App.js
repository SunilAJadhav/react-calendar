import React, { Component } from 'react';
import moment from 'moment';
import {MONTHS} from './constants';
import Calendar from './components/Calendar';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    }

  }

  render() {

    const eachMonthOfYear = [];

    for (let i = 1; i <= MONTHS; i++) {
        eachMonthOfYear.push(<Calendar key={i} year={this.state.date} month = {i} />)
    }

    return (
      <div>
        <header className="header">
          {this.state.date.format("Y")}
        </header>
        <div className="grid">
          <span>{eachMonthOfYear}</span>
        </div>
      </div>

    )

  }
}

export default App;
