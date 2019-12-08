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
  nextYear = (date) => {
    this.setYear(Number(date) + 1);
  }
   
   prevYear = (date) => {
      this.setYear(date - 1);
   }
   
   showToday = () => {
     const today = moment().format('YYYY');
     this.setYear(today);
   }
   
   setYear = (year) => {
     let newDate = Object.assign({}, this.state.date);
     newDate =moment().set('year', year);
     this.setState({
         date: newDate
     })
   }



  render() {

    const date = this.state.date.format("Y");
    const eachMonthOfYear = [];

    for (let i = 1; i <= MONTHS; i++) {
        eachMonthOfYear.push(<Calendar key={i} date={this.state.date} year={this.state.date} month = {i} />)
    }

    return (
      <div>
        <header className=" header">
        <i className="arrow-icon left"
              onClick={(e)=> {this.prevYear(date)}}>
          </i>
              {date}
            <button className="current-year"
                onClick={(e)=> {this.showToday(date)}}> Today
            </button>
            <i className="arrow-icon right"
                onClick={(e)=> {this.nextYear(date)}}>
            </i>
        </header>
        <div className="grid">
          {eachMonthOfYear}
        </div>
      </div>

    )

  }
}

export default App;
