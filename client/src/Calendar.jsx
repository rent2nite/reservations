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
  height: 200%;
`;

const CalendarHeaderRow = styled.tr`
  background-color: #f1f1f1;
  width: 100px;
  text-align: center;
  line-height: 56px;
  font-size: 28px;
  padding: 10px;
  margin: 15px;
`;


const CalendarBodyRow = styled.tr`
  width: 100px;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
  padding: 10px;
`;

const Box = styled.td`
  text-align: center;
  width: 1.125em;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      daysClicked: [],
    };

    this.onDayClick = this.onDayClick.bind(this);
    this.weekdaysShort = moment.weekdaysShort();
    this.months = moment.months();
    this.year = this.year.bind(this);
    this.month = this.month.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  onDayClick(d) {
    const { daysClicked } = this.state;
    const newDaysClicked = [...daysClicked];
    newDaysClicked.push(`${this.month()} ${d}, ${this.year()}`);
    this.setState({ daysClicked: newDaysClicked }, () => console.log(this.state.daysClicked));
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
    const weekdayNames = this.weekdaysShort.map((day) => {
      return (
        <Box colSpan={`${8 / 7}`} key={day} id="weekday">{day}</Box>
      );
    });

    const daysBeforeFirstOfMonth = [];
    for (let i = 0; i < this.firstDayOfMonth(); i += 1) {
      daysBeforeFirstOfMonth.push(<Box key={i * Math.random()} className="daysBeforeFirstOfMonth" />);
    }

    const daysAfterFirstOfMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d += 1) {
      daysAfterFirstOfMonth.push(
        <Box key={d * Math.random()}>
          <span value={d} onClick={() => { this.onDayClick(d); }}>{d}</span>
        </Box>,
      );
    }

    const allDaysInPeriod = [...daysBeforeFirstOfMonth, ...daysAfterFirstOfMonth];
    const weeks = [];
    let week = [];
    allDaysInPeriod.forEach((day, i) => {
      if (i % 7 !== 0) {
        week.push(day);
      } else {
        weeks.push([...week]);
        week = [];
        week.push(day);
      }
      if (i === allDaysInPeriod.length - 1) {
        weeks.push([...week]);
      }
    });

    const trElements = weeks.map((weekRow) => {
      return (
        <CalendarBodyRow colSpan="1" key={Math.random()}>
          {weekRow}
        </CalendarBodyRow>
      );
    });

    return (
      <Wrapper className="calendar-container">
        <CalendarTable className="calendar">
          <thead>
            <CalendarHeaderRow className="calendar-header">
              <Box colSpan="2" className="nav-month">
                <span className="prev-month" onClick={() => { this.prevMonth(); }}>{'<'}</span>
              </Box>
              <Box colSpan="3" className="nav-month">
                <span className="display-month">{`${this.month()}, ${this.year()}`}</span>
              </Box>
              <Box colSpan="2" className="nav-month">
                <span className="next-month" onClick={() => { this.nextMonth(); }}>{'>'}</span>
              </Box>
            </CalendarHeaderRow>
          </thead>
          <tbody>
            <CalendarBodyRow>
              {weekdayNames}
            </CalendarBodyRow>
            {trElements}
          </tbody>
        </CalendarTable>
      </Wrapper>
    );
  }
}

export default Calendar;
