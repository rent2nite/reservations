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

const BookedBox = styled.td`
  text-align: center;
  width: 1.125em;
  background-color: yellow;
`;

const BlackedOutBox = styled.td`
  text-align: center;
  width: 1.125em;
  background-color: red;
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
    this.formattedTime = this.formattedTime.bind(this);
    this.dbFormattedTime = this.dbFormattedTime.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
  }

  dbFormattedTime(d) {
    let current = `${this.formattedTime()}`;
    if (d.toString().length > 1) {
      current = current.slice(0, current.length - 2).concat(`${d}`);
    } else {
      current = current.slice(0, current.length - 2).concat(`0${d}`);
    }
    return current;
  }

  year() {
    const { dateContext } = this.state;
    return dateContext.format('Y');
  }

  month() {
    const { dateContext } = this.state;
    return dateContext.format('MMMM');
  }

  formattedTime() {
    const { dateContext } = this.state;
    return dateContext.format('YYYY-MM-DD');
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

  changeStartDate(d) {
    const { populateDateField } = this.props;
    populateDateField(this.dbFormattedTime(d));
  }

  render() {
    // grabDateClicked only if it is not blacked out amd not booked
    // start with just startDate
    // set state of reserveForm StartDate and EndDate (Depending on if user clicked checkin or checkout)
    // set state of reserveForm AvailableDates (Highlight all dates between startDate and last legal endDate)
    // If EndDate > startDate swap them
    const { currentProperty, currentBookings, currentBlackOutDays } = this.props;
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
      if (currentBlackOutDays.some((e) => {
        return e.day_blacked_out === this.dbFormattedTime(d);
      })) {
        daysAfterFirstOfMonth.push(
          <BlackedOutBox key={d * Math.random()}>
            <span value={d}>{d}</span>
          </BlackedOutBox>,
        );
      } else if (currentBookings.some((e) => {
        return this.dbFormattedTime(d) >= e.starting_date && this.dbFormattedTime(d) <= e.ending_date;
      })) {
        daysAfterFirstOfMonth.push(
          <BookedBox key={d * Math.random()}>
            <span value={d}>{d}</span>
          </BookedBox>,
        );
      } else {
        daysAfterFirstOfMonth.push(
          <Box key={d * Math.random()}>
            <span value={d} onClick={() => { this.changeStartDate(d); }}>{d}</span>
          </Box>,
        );
      }
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
              <Box colSpan="1" className="nav-month">
                <span className="prev-month" onClick={() => { this.prevMonth(); }}>{'<'}</span>
              </Box>
              <Box colSpan="5" className="nav-month">
                <span className="display-month">{`${this.month()}, ${this.year()}`}</span>
              </Box>
              <Box colSpan="1" className="nav-month">
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
