import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    this.sendGuestInfo = this.sendGuestInfo.bind(this);
  }

  incrementAdults() {
    const { adults, children } = this.state;
    const { currentProperty } = this.props;
    if (adults + children < currentProperty.max_occupants) {
      const newAdults = adults + 1;
      this.setState({
        adults: newAdults,
      }, () => this.sendGuestInfo());
    }
  }

  decrementAdults() {
    const { adults } = this.state;
    if (adults > 1) {
      const newAdults = adults - 1;
      this.setState({
        adults: newAdults,
      }, () => this.sendGuestInfo());
    }
  }

  incrementChildren() {
    const { adults, children } = this.state;
    const { currentProperty } = this.props;
    if (adults + children < currentProperty.max_occupants) {
      const newChildren = children + 1;
      this.setState({
        children: newChildren,
      }, () => this.sendGuestInfo());
    }
  }

  decrementChildren() {
    const { children } = this.state;
    if (children > 0) {
      const newChildren = children - 1;
      this.setState({
        children: newChildren,
      }, () => this.sendGuestInfo());
    }
  }

  incrementInfants() {
    const { infants } = this.state;
    if (infants < 5) {
      const newInfants = infants + 1;
      this.setState({
        infants: newInfants,
      }, () => this.sendGuestInfo());
    }
  }

  decrementInfants() {
    const { infants } = this.state;
    if (infants > 0) {
      const newInfants = infants - 1;
      this.setState({
        infants: newInfants,
      }, () => this.sendGuestInfo());
    }
  }

  sendGuestInfo() {
    const { grabGuestInfo } = this.props;
    const { adults, children, infants } = this.state;
    grabGuestInfo({
      adults,
      children,
      infants,
    });
  }

  render() {
    const { adults, children, infants } = this.state;
    return (
      <Wrapper>
        <GuestsTable className="guests-table">
          <tbody>
            <GuestsRow>
              <GuestData className="adults-label">Adults</GuestData>
              <GuestData>
                <button className="adults-decrement" type="submit" onClick={this.decrementAdults}>-</button>
                {adults}
                <button className="adults-increment" type="submit" onClick={this.incrementAdults}>+</button>
              </GuestData>
            </GuestsRow>
            <GuestsRow>
              <GuestData className="children-label">Children</GuestData>
              <GuestData>
                <button className="children-decrement" type="submit" onClick={this.decrementChildren}>-</button>
                {children}
                <button className="children-increment" type="submit" onClick={this.incrementChildren}>+</button>
              </GuestData>
            </GuestsRow>
            <GuestsRow>
              <GuestData className="infants-label">Infants</GuestData>
              <GuestData>
                <button className="infants-decrement" type="submit" onClick={this.decrementInfants}>-</button>
                {infants}
                <button className="infants-increment" type="submit" onClick={this.incrementInfants}>+</button>
              </GuestData>
            </GuestsRow>
          </tbody>
        </GuestsTable>
      </Wrapper>
    );
  }
}

Guests.propTypes = {
  currentProperty: PropTypes.shape({
    max_occupants: PropTypes.string,
  }).isRequired,
  grabGuestInfo: PropTypes.func.isRequired,
};

export default Guests;
