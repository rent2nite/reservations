import styled from 'styled-components';

// APP STYLES
const AppWrapper = styled.section`
  box-sizing: border-box;
  items-align: center;
  border: 1px solid grey;
  margin-bottom: 24px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: fixed;
  top: 22.5px;
  left: 66%;
  right: 3%;
  @media only screen and (max-width: 900px) {
    position: static;
    left: 3%;
    right: 3%;
  }
`;

// RESERVEFORM STYLES
const ReserveFormWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas: 
    "column-one"
    "column-two"
    "column-three"
`;

// top section of reserveform
const TopPriceItem = styled.div`
  position: relative;
  padding-bottom: 20px; 
  grid-area: "column-one";
  display: flex;
  justify-content: flex-start;
  align-self: center;
  border-bottom: 1px solid grey;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const PriceTitle = styled.span`
  font-size: 1.5em;
  color: black;
  font-weight: 530;
`;

const PerNightTitle = styled.span`
  color: black;
  align-self: flex-end;
  margin-left: 3px;
  font-weight: 530;
`;


// main section of reserveform
const MainArea = styled.main`
  position: relative;
  box-sizing: border-box;
  grid-area: "column-two";
  padding-bottom: 15px;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  grid-template-areas: 
    "column-one"
    "column-two"
    "column-three"
`;

const DatesForm = styled.form`
  box-sizing: border-box;
  grid-area: "column-one";
`;

const GuestsForm = styled.form`
  box-sizing: border-box;
  grid-area: "column-two";
  padding-bottom: 20px;
`;

const Title = styled.div`
  text-align: left;
  font-weight: 500;
  color: black;
`;

const CalendarInputDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  grid-template-areas: 
    "date arrow date"
`;

const DateInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 1em;
  grid-area: "date";
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const ArrowInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 1.5em;
  grid-area: "arrow";
  @media only screen and (max-width: 400px) {
    font-size: 1em;
  }
`;

const InputDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const CalendarModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    height: '50%',
    position: 'fixed',
    top: '228px',
    right: '3%',
    left: '56%',
    margin: '15px',
    boxSizing: 'border-box',
  },
};

const GuestsInput = styled.input`
  height: 50px;
  width: 98%;
  font-size: 1em;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const GuestModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    top: '318px',
    right: '3%',
    left: '56%',
    height: '40%',
    position: 'fixed',
    margin: '15px',
    boxSizing: 'border-box',
  },
};

// bottom section of reserveform
const BottomReserveArea = styled.div`
  position: relative;
  grid-area: "column-three";
  padding-top: 20px;
  padding-bottom: 10px;
`;

const ReserveButton = styled.button`
  background: rgb(255, 90, 95);
  color: white; 
  font-size: 1.5em;
  width: 98%;
  height: 50px;
  border-radius: 0.5em;
`;

const ClearDates = styled.div`
  background: white;
  bottom: 10px;
  right: 10px;
  font-size: 16px;
  text-align: right;
  // padding: 10px;
  color: purple;
  text-decoration: underline;
  @media only screen and (max-width: 400px) {
    font-size: 0.7em;
  }
`;

// Calendar Styles
const CalendarWrapper = styled.div`
  box-sizing: border-box;
`;

const CalendarTable = styled.table`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const CalendarHeader = styled.thead`
  width: 100%;
  box-sizing: border-box;
`;

const CalendarHeaderRow = styled.tr`
  box-sizing: border-box;
  line-height: 56px;
  font-size: 28px;
  @media only screen and (max-width: 400px) {
    font-size: 1em;
  }
`;

const CalendarTitle = styled.th`
  text-align: center;
`;

const CalendarNav = styled.th`
  text-align: center;
`;


const CalendarWeekdaysRow = styled.tr`
  line-height: 50px;
  font-size: 16px;
  padding: 10px;
`;

const DaysOfWeek = styled.td`
  text-align: center;
  border: 1px double rgb(0, 166, 153);
`;

const CalendarBodyRow = styled.tr`
line-height: 50px;
font-size: 16px;
padding: 10px;
`;

const Box = styled.td`
  text-align: center;
  border: 1px double rgb(0, 166, 153);
  :hover {
    background: rgb(0, 166, 153);
    opacity: 0.4;
  }
`;

const BlackedOutBookedBox = styled.td`
  text-align: center;
  border: 1px double rgb(0, 166, 153);
  color: rgb(216, 216, 216);
  text-decoration: line-through;
`;

const BeingBookedBox = styled.td`
  text-align: center;
  border: 1px double rgb(0, 166, 153);
  background: rgb(0, 166, 153);
`;

// Guests Styles
const GuestsTable = styled.table`
  position: relative;
  margin: 10px auto;
  padding: 0;
  width: 100%;
  height: auto;
  text-align: center;
`;

const GuestBody = styled.tbody`
  width: 100%;
  box-sizing: border-box;
`;

const GuestsRow = styled.tr`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  line-height: 56px;
  font-size: 24px;
  font-weight: 200;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "title group"
`;

const GuestTitle = styled.td`
  width: 100%;
  grid-area: "title";
  text-align: start;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const GuestGroup = styled.td`
  postion: relative;
  width: 100%;
  grid-area: "group";
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "button value button"
`;

const GuestValue = styled.span`
  width: 100%;
  grid-area: "value";
  justify-self: center;
  align-self: center;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const IncrementDecrementButton = styled.button`
  grid-area: "button";
  height: 3em;
  width: 3em;
  border-radius: 50%;
  font-size: 0.5em;
  border: 1px solid grey;
  margin-right: 1em;
  margin-left: 1em;
  justify-self: center;
  align-self: center;
  @media only screen and (max-width: 400px) {
    height: 2em;
    width: 2em;
    margin-right: 0.6em;
    margin-left: 0.6em;
  }
`;

const MaxGuests = styled.div`
  background: white;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  @media only screen and (max-width: 400px) {
    font-size: 0.7em;
  }
`;

// PriceInfo Styles
const PriceInfoWrapper = styled.div`
  box-sizing: border-box;
  justify-items: start;
  display: grid;
  grid-template-areas: 
    "price-info"
    "price-info"
    "price-info"
    "price-info"
    "price-info"
`;

const PriceInfoRow = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  grid-area: "price-info";
  display: grid;
  grid-template-areas: 
    "label value"
`;

const PriceInfoLabel = styled.div`
  color: black;
  grid-area: "label";
  justify-self: start;
  font-weight: ${(props) => (props.primary ? 'bold' : 'normal')};
`;

const PriceInfoValue = styled.div`
  color: black;
  grid-area: "value";
  justify-self: end;
  font-weight: ${(props) => (props.primary ? 'bold' : 'normal')};
`;

export default {
  AppWrapper,
  ReserveFormWrapper,
  TopPriceItem,
  PriceTitle,
  PerNightTitle,
  MainArea,
  DatesForm,
  GuestsForm,
  Title,
  CalendarInputDiv,
  InputDiv,
  DateInput,
  ArrowInput,
  CalendarModalStyle,
  GuestsInput,
  GuestModalStyle,
  BottomReserveArea,
  ReserveButton,
  ClearDates,
  CalendarWrapper,
  CalendarTable,
  CalendarHeader,
  CalendarHeaderRow,
  CalendarTitle,
  CalendarNav,
  CalendarWeekdaysRow,
  CalendarBodyRow,
  DaysOfWeek,
  Box,
  BlackedOutBookedBox,
  BeingBookedBox,
  GuestsTable,
  GuestBody,
  GuestsRow,
  GuestTitle,
  GuestGroup,
  GuestValue,
  IncrementDecrementButton,
  MaxGuests,
  PriceInfoWrapper,
  PriceInfoRow,
  PriceInfoLabel,
  PriceInfoValue,
};
