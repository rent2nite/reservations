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
      adults: 1,
      children: 0,
      infants: 0,
    };
    this.incrementAdults = this.incrementAdults.bind(this);
    this.decrementAdults = this.decrementAdults.bind(this);
    this.incrementChildren = this.incrementChildren.bind(this);
    this.decrementChildren = this.decrementChildren.bind(this);
    this.incrementInfants = this.incrementInfants.bind(this);
    this.decrementInfants = this.decrementInfants.bind(this);
  }

  incrementAdults() {
    const { adults } = this.state;
    const newAdults = adults + 1;
    this.setState({
      adults: newAdults,
    }, () => console.log(adults));
  }

  decrementAdults() {
    const { adults } = this.state;
    if (adults > 1) {
      const newAdults = adults - 1;
      this.setState({
        adults: newAdults,
      }, () => console.log(adults));
    }
  }

  incrementChildren() {
    const { children } = this.state;
    const newChildren = children + 1;
    this.setState({
      children: newChildren,
    }, () => console.log(children));
  }

  decrementChildren() {
    const { children } = this.state;
    if (children > 0) {
      const newChildren = children - 1;
      this.setState({
        children: newChildren,
      }, () => console.log(children));
    }
  }

  incrementInfants() {
    const { infants } = this.state;
    const newInfants = infants + 1;
    this.setState({
      infants: newInfants,
    }, () => console.log(infants));
  }

  decrementInfants() {
    const { infants } = this.state;
    if (infants > 0) {
      const newInfants = infants - 1;
      this.setState({
        infants: newInfants,
      }, () => console.log(infants));
    }
  }

  render() {
    const { adults, children, infants } = this.state;
    return (
      <Wrapper>
        <GuestsTable>
          <tbody>
            <GuestsRow>
              <GuestData>Adults</GuestData>
              <GuestData>
                <button type="submit" onClick={this.decrementAdults}>-</button>
                {adults}
                <button type="submit" onClick={this.incrementAdults}>+</button>
              </GuestData>
            </GuestsRow>
            <GuestsRow>
              <GuestData>Children</GuestData>
              <GuestData>
                <button type="submit" onClick={this.decrementChildren}>-</button>
                {children}
                <button type="submit" onClick={this.incrementChildren}>+</button>
              </GuestData>
            </GuestsRow>
            <GuestsRow>
              <GuestData>Infants</GuestData>
              <GuestData>
                <button type="submit" onClick={this.decrementInfants}>-</button>
                {infants}
                <button type="submit" onClick={this.incrementInfants}>+</button>
              </GuestData>
            </GuestsRow>
          </tbody>
        </GuestsTable>
      </Wrapper>
    );
  }
}

export default Guests;
