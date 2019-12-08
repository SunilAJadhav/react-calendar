import React, {Component} from 'react';
import moment from 'moment';
import {MONTHS_LIST, WEEKDAYS_SHORT} from '../constants';
import '../styles/calendar.css';

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date:  this.props.year +'-'+this.props.month,
            year : this.props.year,
            month : this.props.month
        }
    }

    months = moment.months();

    daysInMonth = () => {
        const days = moment(this.state.date, "YYYY-MM").daysInMonth();
        return days;
    }

    firstDayOfMonth = () => {
        let firstDay = moment(this.state.date).startOf('month').format('d');
        return firstDay;
    }

    lastDayOfMonth = () => {
        let lastDay = moment(this.state.date).endOf('month').format('d');
        return lastDay;
    }
 
    onDayClick = (e, day) => {
       //Todo: day click event
       console.log(e +'...'+day)
    }

    render() {

        const weekdays = WEEKDAYS_SHORT.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }

        //lastDayOfMonth
        let blanksLast = [];
        for (let i = 0; i < this.lastDayOfMonth(); i++) {
            blanksLast.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} className="day" >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth, ...blanksLast];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        const rowElements = rows.map((day, i) => {
            return (
                <tr key={i*100} className="table-row">
                    {day}
                </tr>
            );
        })

        return (
                <table className="grid-element">
                    <span className="calendar-header"> {MONTHS_LIST[this.state.month-1]}</span>
                    <tbody className="calendar-body">
                        <tr className="calendar-weeks">
                            {weekdays}
                        </tr>
                        {rowElements}
                    </tbody>
                </table>
        );
    }
}
