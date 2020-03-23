import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';

const {
  GuestsTable, GuestBody, GuestsRow, GuestTitle, IncrementDecrementButton, GuestValue, GuestGroup,
} = Styles;

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
      <div>
        <GuestsTable className="guests-table">
          <GuestBody>
            <GuestsRow>
              <GuestTitle className="adults-label">Adults</GuestTitle>
              <GuestGroup>
                <IncrementDecrementButton className="adults-decrement" type="submit" onClick={this.decrementAdults}>-</IncrementDecrementButton>
                <GuestValue>{adults}</GuestValue>
                <IncrementDecrementButton className="adults-increment" type="submit" onClick={this.incrementAdults}>+</IncrementDecrementButton>
              </GuestGroup>
            </GuestsRow>
            <GuestsRow>
              <GuestTitle className="children-label">Children</GuestTitle>
              <GuestGroup>
                <IncrementDecrementButton className="children-decrement" type="submit" onClick={this.decrementChildren}>-</IncrementDecrementButton>
                <GuestValue>{children}</GuestValue>
                <IncrementDecrementButton className="children-increment" type="submit" onClick={this.incrementChildren}>+</IncrementDecrementButton>
              </GuestGroup>
            </GuestsRow>
            <GuestsRow>
              <GuestTitle className="infants-label">Infants</GuestTitle>
              <GuestGroup>
                <IncrementDecrementButton className="infants-decrement" type="submit" onClick={this.decrementInfants}>-</IncrementDecrementButton>
                <GuestValue>{infants}</GuestValue>
                <IncrementDecrementButton className="infants-increment" type="submit" onClick={this.incrementInfants}>+</IncrementDecrementButton>
              </GuestGroup>
            </GuestsRow>
          </GuestBody>
        </GuestsTable>
      </div>
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
