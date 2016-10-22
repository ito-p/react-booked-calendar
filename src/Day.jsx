import React, { Component } from 'react';

import Status from './Status.jsx'
import * as color from './styles/color.jsx'

export default class Day extends Component {

  render() {
    const { day, expand, openHour, closeHour, onClickTimeBlock, currentMonth } = this.props

    const openNum = _.filter(day.events, event => {
        return event.status == 'open'
      }).length
    const status = day.events.length < 1 ? 'none'
      : openNum == day.events.length ? 'open'
      : day.events.length > 0 && openNum == 0 ? 'close'
      : 'least'
    const number = openNum
    const height = !expand ? 80 : 42

    const dateStyle = currentMonth == day.date.getMonth() + 1 ? styles.date : Object.assign({}, styles.date, {opacity: 0.3})

    return (
      <li style={Object.assign({}, styles.container, {height: height})}>
        <div style={dateStyle}>{day.date.getDate()}</div>
        {
          !expand
          ? <div style={styles.status}>
              <Status
                status={status}
                number={number}
                />
            </div>
          : <div />
        }
      </li>
    );
  }
}

const styles = {
  container: {
    borderTop: `solid 0.5px ${color.stroke}`,
    borderLeft: `solid 0.5px ${color.stroke}`,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
  },
  enter: {
    opacity: 1,
    transition: 'opacity 4s ease-in',
  },
  date: {
    fontFamily: 'mplus-2c-heavy',
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '10px'
  },
  status: {
    alignSelf: 'center',
  }
}

Day.propTypes = {
  year: React.PropTypes.number,
  endHour: React.PropTypes.number
}
