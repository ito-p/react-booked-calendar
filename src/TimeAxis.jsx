import React, { Component } from 'react';

export default class TimeAxis extends Component {
  render() {
    const { openHour = 0, closeHour = 24, span } = this.props
    const hours = Array.from(Array(closeHour - openHour + 1).keys()).map(index => {
      return ('0' + (index + openHour)).slice(-2) + ':00'
    })
    return (
      <ol style={styles.container}>
        {
          hours.map((hour,index) => {
            return (
              <li key={index} style={Object.assign({}, styles.time, {top: span * index - 4})}>{hour}</li>
            )
          })
        }
      </ol>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
  },
  time: {
    position: 'absolute',
    right: '8px',
    fontSize: 12
  }
}

TimeAxis.propTypes = {
  openHour: React.PropTypes.number,
  closeHour: React.PropTypes.number
}
