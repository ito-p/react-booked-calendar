import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    const { status, number = 0 } = this.props
    switch(status) {
      case 'open': return (<span style={styles.sign}>◯</span>)
      case 'least': return (<div style={styles.container}><span style={styles.sign}>△</span><span style={styles.number}>{number}</span></div>)
      case 'close': return (<span style={styles.sign}>×</span>)
      case 'none': return (<span style={styles.sign}>　</span>)
      default: return (<span style={styles.sign}>　</span>)
    }
  }
}

const styles = {
  container: {
    position: 'relative'
  },
  sign: {
    fontSize: 24,
    fontFamily: 'mplus-2c-light',
    "msUserSelect": 'none',
    "WebkitUserSelect": 'none',
    "MozUserSelect": 'none'
  },
  number: {
    position: 'absolute',
    top: '0.9em',
    left: '0.9em',
    fontSize: 10,
    fontFamily: 'mplus-2c-heavy',
    "msUserSelect": 'none',
    "WebkitUserSelect": 'none',
    "MozUserSelect": 'none'
  },
}

Status.propTypes = {
  status: React.PropTypes.oneOf(['open', 'least', 'close', 'none']).isRequired,
  number: React.PropTypes.number
}
