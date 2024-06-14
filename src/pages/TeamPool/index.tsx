
import React, { Component, PureComponent } from 'react';
import { h } from '../..';
import { connectToRedux } from '../connectToRedux';

class TeamPool extends PureComponent {
  render() {
    return (
      <div>
        1
      </div>
    );
  }
}

export default connectToRedux(TeamPool)