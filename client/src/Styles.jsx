import styled from 'styled-components';

// ReserveForm Styles
const Wrapper = styled.section`
  text-align: center;
`;

const PriceTitle = styled.span`
  font-size: 1.5em;
  text-align: left;
  color: black;
  float: left;
`;

const PerNightTitle = styled.span`
  font-size: 0.75em;
  text-align: left;
  color: black;
  float: left;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  color: black;
`;

const DateInput = styled.input`
  font-size: 0.4em;
  height: 10em;
  width: 40%;
`;

const ArrowInput = styled.input`
  font-size: 0.8em;
  height: 5em;
  width: 10%;
`;

const GuestsInput = styled.input`
  font-size: 0.4em;
  height: 10em;
  width: 90%;
`;

const ReserveButton = styled.button`
  background: red;
  font-size: 1.5em;
  width: 90%;
  height: 3em;
  border-radius: 1em;
`;

const ClearClose = styled.span`
  position: absolute;
  right: 1em;
  padding: 5px;
  color: purple;
  text-decoration: underline;
`;

// Calendar Styles
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

const BeingBookedBox = styled.td`
  text-align: center;
  width: 1.125em;
  background-color: blue;
`;

export default {
  Wrapper,
  PriceTitle,
  PerNightTitle,
  Title,
  DateInput,
  ArrowInput,
  GuestsInput,
  ReserveButton,
  ClearClose,
  CalendarTable,
  CalendarHeaderRow,
  CalendarBodyRow,
  Box,
  BookedBox,
  BlackedOutBox,
  BeingBookedBox,
};
