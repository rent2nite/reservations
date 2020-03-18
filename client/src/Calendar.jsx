import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Styles from './Styles';

const {
  CalendarWrapper,
  CalendarTable,
  CalendarHeaderRow,
  CalendarBodyRow,
  Box,
  BookedBox,
  BlackedOutBox,
  BeingBookedBox,
} = Styles;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
    };

    this.weekdaysShort = moment.weekdaysShort();
    this.months = moment.months();
    this.getFirstInvalidEndDate = this.getFirstInvalidEndDate.bind(this);
    this.changeStartEndDate = this.changeStartEndDate.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.month = this.month.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.isBeforeThisMonth = this.isBeforeThisMonth.bind(this);
    this.year = this.year.bind(this);
    this.formattedTime = this.formattedTime.bind(this);
    this.dbFormattedTime = this.dbFormattedTime.bind(this);
  }

  getFirstInvalidEndDate(d) {
    const { currentBookings, currentBlackOutDays } = this.props;
    let closestAfter = '9999-12-31';
    currentBookings.forEach((booking) => {
      if (booking.starting_date < closestAfter && booking.starting_date > d) {
        closestAfter = booking.starting_date;
      }
    });
    currentBlackOutDays.forEach((day) => {
      if (day.day_blacked_out < closestAfter && day.day_blacked_out > d) {
        closestAfter = day.day_blacked_out;
      }
    });
    return closestAfter;
  }

  changeStartEndDate(d) {
    const {
      populateStartDateField, populateEndDateField, startDate, endDate,
    } = this.props;
    if (startDate === 'Check In') {
      populateStartDateField(this.dbFormattedTime(d));
    } else if (this.dbFormattedTime(d) >= this.getFirstInvalidEndDate(startDate)) {
      populateStartDateField(this.dbFormattedTime(d));
      populateEndDateField('Check Out');
    } else if (this.dbFormattedTime(d) < this.getFirstInvalidEndDate(startDate)
    && this.dbFormattedTime(d) > startDate) {
      populateEndDateField(this.dbFormattedTime(d));
    } else if (this.dbFormattedTime(d) < startDate) {
      if (endDate >= this.getFirstInvalidEndDate(this.dbFormattedTime(d))) {
        populateEndDateField('Check Out');
      } else {
        populateEndDateField(startDate);
      }
      populateStartDateField(this.dbFormattedTime(d));
    }
  }

  daysInMonth() {
    const { dateContext } = this.state;
    return dateContext.daysInMonth();
  }

  month() {
    const { dateContext } = this.state;
    return dateContext.format('MMMM');
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

  isBeforeThisMonth() {
    const { dateContext, today } = this.state;
    return (dateContext.format('YYYYMM') < today.format('YYYYMM'));
  }

  year() {
    const { dateContext } = this.state;
    return dateContext.format('Y');
  }

  formattedTime() {
    const { dateContext } = this.state;
    return dateContext.format('YYYY-MM-DD');
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

  render() {
    const {
      currentBookings, currentBlackOutDays, startDate, endDate,
    } = this.props;
    const { dateContext, today } = this.state;
    const weekdayNames = this.weekdaysShort.map((day) => {
      return (
        <Box colSpan={`${8 / 7}`} key={day}>
          {day}
        </Box>
      );
    });

    const daysBeforeFirstOfMonth = [];
    for (let i = 0; i < this.firstDayOfMonth(); i += 1) {
      daysBeforeFirstOfMonth.push(<Box key={i * Math.random()} />);
    }
    const daysAfterFirstOfMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d += 1) {
      if (this.dbFormattedTime(d) >= startDate && this.dbFormattedTime(d) <= (endDate === 'Check Out' ? startDate : endDate)) {
        daysAfterFirstOfMonth.push(
          <BeingBookedBox key={d * Math.random()} onClick={() => { this.changeStartEndDate(d); }}>
            {d}
          </BeingBookedBox>,
        );
      } else if (currentBlackOutDays.some((e) => {
        return e.day_blacked_out === this.dbFormattedTime(d);
      }) || this.isBeforeThisMonth() || (dateContext.format('YYYYMM') === today.format('YYYYMM') && d < today.format('D'))) {
        daysAfterFirstOfMonth.push(
          <BlackedOutBox key={d * Math.random()}>
            {d}
          </BlackedOutBox>,
        );
      } else if (currentBookings.some((e) => {
        return this.dbFormattedTime(d) >= e.starting_date
        && this.dbFormattedTime(d) <= e.ending_date;
      })) {
        daysAfterFirstOfMonth.push(
          <BookedBox key={d * Math.random()}>
            {d}
          </BookedBox>,
        );
      } else {
        daysAfterFirstOfMonth.push(
          <Box key={d * Math.random()} onClick={() => { this.changeStartEndDate(d); }}>
            {d}
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
        <CalendarBodyRow className="weekly-data" colSpan="1" key={Math.random()}>
          {weekRow}
        </CalendarBodyRow>
      );
    });

    return (
      <CalendarWrapper>
        <CalendarTable className="calendar-table">
          <thead>
            <CalendarHeaderRow>
              <Box className="calendar-month-prev" colSpan="1" onClick={() => { this.prevMonth(); }}>{'<'}</Box>
              <Box className="calendar-month-header" colSpan="5">{`${this.month()}, ${this.year()}`}</Box>
              <Box className="calendar-month-next" colSpan="1" onClick={() => { this.nextMonth(); }}>{'>'}</Box>
            </CalendarHeaderRow>
          </thead>
          <tbody>
            <CalendarBodyRow className="weekdays">
              {weekdayNames}
            </CalendarBodyRow>
            {trElements}
          </tbody>
        </CalendarTable>
      </CalendarWrapper>
    );
  }
}

Calendar.propTypes = {
  currentProperty: PropTypes.shape({ price_per_night: PropTypes.string }).isRequired,
  currentBlackOutDays: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentBookings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  populateStartDateField: PropTypes.func.isRequired,
  populateEndDateField: PropTypes.func.isRequired,
};

export default Calendar;
