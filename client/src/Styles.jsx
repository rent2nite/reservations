import styled from 'styled-components';

// APP STYLES
const AppWrapper = styled.section`
  box-sizing: border-box;
  items-align: center;
  border: 1px solid grey;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 15px;
  position: fixed;
  top: 10%;
  left: 56%;
  right: 6%;
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
`;

const PriceTitle = styled.span`
  font-size: 1.5em;
  color: black;
  font-weight: bold;
`;

const PerNightTitle = styled.span`
  color: black;
  align-self: flex-end;
  margin-left: 3px;
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
  font-weight: bold;
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
  font-size: 1.4em;
  grid-area: "date";
`;

const ArrowInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 1.4em;
  grid-area: "arrow";
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
    height: '47%',
    position: 'fixed',
    top: '27.5%',
    right: '6%',
    left: '56%',
    margin: '15px',
    boxSizing: 'border-box',
  },
};

const GuestsInput = styled.input`
  height: 50px;
  width: 98%;
  font-size: 1.4em;
`;

const GuestModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    top: '37%',
    right: '6%',
    left: '56%',
    height: '47%',
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
  background: red;
  font-size: 1.5em;
  width: 98%;
  height: 50px;
  border-radius: 0.5em;
`;

const ClearClose = styled.span`
  position: absolute;
  right: 0px;
  line-height: 48px;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
  color: purple;
  text-decoration: underline;
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
  background-color: white;
  border-spacing: 0;
  border-collapse: collapse;
`;

const GuestsRow = styled.tr`
  width: 100%;
  line-height: 56px;
  font-size: 28px;
  margin: 15px;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-areas: 
    "title group"
  justify-content: center;
  align-items: center;
`;

const GuestTitle = styled.td`
  grid-area: "title";
  text-align: center;
  justify-self: start;
`;

const GuestGroup = styled.td`
  grid-area: "group";
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 
    "button value button"
  justify-content: center;
  align-items: center;
`;

const GuestValue = styled.span`
  grid-area: "value";
  justify-self: center;
`;

const IncrementDecrementButton = styled.button`
  grid-area: "button";
  height: 45px;
  width: 45px;
  border-radius: 50%;
  font-size: 0.5em;
  border: 1px solid grey;
  margin-right: 20px;
  margin-left: 20px;
  justify-self: center;
`;

const MaxGuests = styled.div`
  width: 100%;
  line-height: 48px;
  font-size: 20px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
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
  grid-area: "label";
  justify-self: start;
  font-weight: ${(props) => (props.primary ? 'bold' : 'normal')};
`;

const PriceInfoValue = styled.div`
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
  ClearClose,
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
