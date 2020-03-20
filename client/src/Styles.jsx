import styled from 'styled-components';

// App Styles
const AppWrapper = styled.section`
  box-sizing: border-box;
  items-align: center;
  border: 1px solid grey;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 15px;
  position: fixed;
  top: 10%;
  left: 57.5%;
  width: 35%;
`;

// ReserveForm Styles
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
    width: '33.33%',
    height: '40%',
    position: 'fixed',
    top: '29%',
    left: '57.5%',
    marginRight: '15px',
    marginLeft: '15px',
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
    width: '33.33%',
    height: '40%',
    position: 'fixed',
    top: '38.5%',
    left: '57.5%',
    padding: '15px',
    marginRight: '15px',
    marginLeft: '15px',
    boxSizing: 'border-box',
  },
};

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

// Guests Styles
const GuestsTable = styled.table`
  background-color: white;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  height: 200%;
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
  InputDiv,
  CalendarInputDiv,
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
  CalendarHeaderRow,
  CalendarBodyRow,
  Box,
  BookedBox,
  BlackedOutBox,
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
