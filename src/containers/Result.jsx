import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

const action = {
  type: 'UPDATE_CHOICE_WITH_MY_INDEX',
  indexSelected: Math.floor(Math.random() * 4)
};

class Result extends Component {
  constructor() {
    super();
    setInterval(() => this.props.dispatch(action), 1000);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.houses.map(house => (
            <li key={house}>{house}</li>
          ))}
        </ul>
        <Message message={this.props.selectedHouses} />
      </div>
    );
  }
}

export default connect(store => store)(Result);