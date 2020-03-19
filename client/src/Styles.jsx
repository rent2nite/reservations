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
  box-sizing: border-box;
  grid-area: "column-two";
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
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

const InputDiv = styled.div`
  box-sizing: border-box;
`;

const DateInput = styled.input`
  height: 50px;
  width: 41%;

`;

const ArrowInput = styled.input`
  height: 50px;
  width: 12%;
`;

const CalendarModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    background: 'white',
    width: '35%',
    height: '35%',
    position: 'fixed',
    top: '30%',
    left: '57.5%',
    padding: '15px',
    boxSizing: 'border-box',
  },
};

const GuestsInput = styled.input`
  height: 50px;
  width: 98%;
`;

const GuestModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    background: 'white',
    width: '35%',
    height: '35%',
    position: 'fixed',
    top: '45%',
    left: '57.5%',
    padding: '15px',
    boxSizing: 'border-box',
  },
};

const BottomReserveArea = styled.div`
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
  right: 1em;
  padding: 5px;
  color: purple;
  text-decoration: underline;
`;

// Calendar Styles
const CalendarWrapper = styled.div`
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
  width: 100px;
  text-align: center;
  line-height: 56px;
  font-size: 28px;
  padding: 10px;
  margin: 15px;
`;

const GuestData = styled.td`
  text-align: center;
  width: 50%;
`;

// PriceInfo Styles
const PriceInfoWrapper = styled.div`
  box-sizing: border-box;
  justify-items: start;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: 
  "labels values"
`;

const PriceInfoLabels = styled.div`
  grid-area: "labels";
`;

const PriceInfoLabel = styled.div`
  text-align: left;
  font-weight: ${(props) => (props.primary ? 'bold' : 'normal')};
`;

const PriceInfoValues = styled.div`
  grid-area: "values";
`;

const PriceInfoValue = styled.div`
  text-align: right;
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
  GuestData,
  PriceInfoWrapper,
  PriceInfoLabels,
  PriceInfoValues,
  PriceInfoLabel,
  PriceInfoValue,
};
