import React, { Component } from 'react';

import Grid from './Grid'
import TimeBlock from './TimeBlock'
import * as color from './styles/color'

export default class TimeTable extends Component {
  render() {
    const { events, openHour, closeHour, width, onClickTimeBlock, span } = this.props
    const openHours = closeHour - openHour
    return (
      <div style={Object.assign({}, styles.container, {height: span * openHours})}>
        <div style={styles.grid}>
          <Grid
            number={openHours}
            height={span * openHours}
            />
        </div>
        <div style={styles.timeblocks}>
          {
            events.map((event, index) => {
              return (
                <TimeBlock
                  key={index}
                  event={event}
                  openHour={openHour}
                  span={span}
                  width={width}
                  onClick={(e) => {
                    onClickTimeBlock(e)
                  }}
                  />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    borderLeft: `solid 0.5px ${color.stroke}`,
    position: 'relative'
  },
  grid: {
    width: '80px'
  },
  timeblocks: {
  }
}
