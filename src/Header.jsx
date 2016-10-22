import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { year, month } = this.props
    return (
      <h3 style={styles.text}>{year}年{month}月</h3>
    );
  }
}

const styles = {
  text: {
    fontFamily: 'mplus-2c-thin',
    fontSize: 18
  }
}
