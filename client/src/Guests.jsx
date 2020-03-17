import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

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

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <GuestsTable>
          <GuestsRow>
            <GuestData>Adults</GuestData>
            <GuestData><button>-</button>0<button>+</button></GuestData>
          </GuestsRow>
          <GuestsRow>
            <GuestData>Children</GuestData>
            <GuestData><button>-</button>0<button>+</button></GuestData>
          </GuestsRow>
          <GuestsRow>
            <GuestData>Infants</GuestData>
            <GuestData><button>-</button>0<button>+</button></GuestData>
          </GuestsRow>
        </GuestsTable>
      </Wrapper>
    );
  }
}

export default Guests;
