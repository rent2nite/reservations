import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid grey;
`;

const CalendarTable = styled.table`
  background-color: white;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

const Day = styled.span`
  font-size: 0.8em;
  cursor: pointer;
  width: 24px;
  height: 24px;
  line-height: 24px;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
    };

    this.weekdaysShort = moment.weekdaysShort();
    this.months = moment.months();
    this.year = this.year.bind(this);
    this.month = this.month.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);

  }

  year() {
    const { dateContext } = this.state;
    return dateContext.format('Y');
  }

  month() {
    const { dateContext } = this.state;
    return dateContext.format('MMMM');
  }

  daysInMonth() {
    const { dateContext } = this.state;
    return dateContext.daysInMonth();
  }

  firstDayOfMonth() {
    const { dateContext } = this.state;
    return moment(dateContext).startOf('month').format('d');
  }

  nextMonth() {
    const { dateContext } = this.state;
    let newDateContext = { ...dateContext };
    newDateContext = moment(dateContext).add(1, 'month');
    this.setState({
      dateContext: newDateContext,
    });
  }

  prevMonth() {
    const { dateContext } = this.state;
    let newDateContext = { ...dateContext };
    newDateContext = moment(dateContext).subtract(1, 'month');
    this.setState({
      dateContext: newDateContext,
    });
  }


  render() {
    const weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} id="weekday">{day}</td>
      );
    });

    const daysBeforeStart = [];
    for (let i = 0; i < this.firstDayOfMonth(); i += 1) {
      daysBeforeStart.push(<td className="daysBeforeStart"></td>);
    }

    const daysUntilEnd = [];
    for (let d = 1; d <= this.daysInMonth(); d += 1) {
      daysUntilEnd.push(
        <td key={d}>
          <Day>{d}</Day>
        </td>,
      );
    }

    const totalMonthView = [...daysBeforeStart, ...daysUntilEnd];
    const rows = [];
    let cells = [];
    totalMonthView.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells.slice()); // new row
        cells = [];
        cells.push(row);
      }
      if (i === totalMonthView.length - 1) {
        rows.push(cells.slice()); // new row
      }
    });

    console.log(totalMonthView);

    const trElements = rows.map((d) => {
      return (
        <tr key={Math.random()}>
          {d}
        </tr>
      );
    });

    return (
      <Wrapper className="calendar-container">
        <CalendarTable className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="3" className="nav-month">
                <span className="prev-month" onClick={() => { this.prevMonth(); }}>
                  {'<'}
                </span>
                <span>
                  {`${this.month()}, ${this.year()}`}
                </span>
                <span className="next-month" onClick={() => { this.nextMonth(); }}>
                  {'>'}
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElements}
          </tbody>
        </CalendarTable>
      </Wrapper>
    );
  }
}

export default Calendar;
