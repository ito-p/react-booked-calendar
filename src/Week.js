import React, { Component } from 'react';

import Day from './Day'
import * as color from './styles/color'
import TimeAxis from './TimeAxis'
import TimeTable from './TimeTable'

const SPAN = 30

export default class Week extends Component {
  constructor() {
    super()
    this.state = {
      expand: false
    }
  }
  render() {
    const { days, openHour, closeHour, onClickTimeBlock, currentMonth } = this.props
    const { expand } = this.state
    return (
      <div
        style={styles.container}
        onClick={(e) => {
          if (!expand) {
            this.setState({expand: true})
          }
        }}>
        <div style={styles.daysContainer}>
          {
            days.map((day,index) => {
              return (
                <Day
                  key={index}
                  day={day}
                  expand={expand}
                  openHour={openHour}
                  closeHour={closeHour}
                  currentMonth={currentMonth}
                  onClickTimeBlock={(e) => {
                    onClickTimeBlock(e)
                  }}
                />
              )
            })
          }
        </div>
        {
          expand
          ? <div style={styles.timetableContainer}>
              <TimeAxis
                openHour={openHour}
                closeHour={closeHour}
                span={SPAN}
                />
              {
                days.map((day,index) => {
                  return (
                    <TimeTable
                      key={index}
                      events={day.events}
                      openHour={openHour}
                      closeHour={closeHour}
                      width={80}
                      span={SPAN}
                      onClickTimeBlock={(e)=>{
                        onClickTimeBlock(e)
                      }}
                      />
                  )
                })
              }
            </div>
          : <div />
        }
        {
          expand
          ? <div onClick={(e) => {
                if (expand) {
                  this.setState({expand: false})
                }
              }} style={styles.closeContainer}
              >
                <div style={styles.close}>
                  <span>close</span>
                </div>
            </div>
          : <div />
        }
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  daysContainer: {
    display: 'flex',
  },
  timetableContainer: {
    display: 'flex'
  },
  closeContainer: {
    borderLeft: `solid 0.5px ${color.stroke}`,
    paddingTop: '8px',
    paddingBottom: '16px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  close: {
    backgroundColor: color.strokeStrong,
    borderRadius: '5px',
    color: color.invertText,
    textAlign: 'center',
    padding: '4px',
    fontFamily: 'mplus-2c-light'
  }
}
