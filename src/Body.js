import React, { Component } from 'react';

import Week from './Week'
import _ from 'underscore'
import lodash from 'lodash'
import * as color from './styles/color'

export default class Body extends Component {

  render() {
    const { year, month, events, openHour, closeHour } = this.props

    const currentDates = this._generateDateObjects(year, month, events)

    const weeks = lodash.chunk(currentDates, 7)

    return (
      <div style={styles.container}>
        <div style={styles.calendar}>
        {
          weeks.map((week, index) => {
            return (
              <Week
                key={index}
                days={week}
                currentMonth={month}
                openHour={openHour}
                closeHour={closeHour}
                onClickTimeBlock={(e) => {
                  console.log(e)
                }}
                />
            )
          })
        }
        </div>
      </div>
    )
  }
  _generateDateObjects(year, month, events) {
    const monthForDate = month - 1
    const currentMonthOfFirstDate = new Date(year, monthForDate, 1)
    const currentMonthOfLastDate = new Date(new Date(year, monthForDate + 1, 1) - 1)
    let currentDates = _(currentMonthOfLastDate.getDate()).times(index => {
      return this._buildDateObject(new Date(year, monthForDate, index + 1), events)
    })

    _(currentMonthOfFirstDate.getDay()).times(index => {
      currentDates.unshift(
        this._buildDateObject(new Date(year, monthForDate, - index), events)
      )
    })

    _(6 - currentMonthOfLastDate.getDay()).times(index => {
      currentDates.push(
        this._buildDateObject(new Date(year, monthForDate + 1, index + 1), events)
      )
    })
    return currentDates
  }

  _buildDateObject(date, events) {
    let eventList = _.filter(events, event => {
      return date.getFullYear() == event.startDate.getFullYear() &&
        date.getMonth() == event.startDate.getMonth() &&
        date.getDate() == event.startDate.getDate()
    })
    return {
      date: date,
      events: eventList
    }
  }

}

const styles = {
  container: {
    display: 'flex',
  },
  dayOfWeek: {

  },
  calendar: {
    borderRight: `solid 0.5px ${color.stroke}`,
    borderBottom: `solid 0.5px ${color.stroke}`
  }
}

Body.propTypes = {
  year: React.PropTypes.number,
  month: React.PropTypes.number
}
