import React, { Component } from 'react';

import Header from './Header.jsx'
import NextPager from './pager/NextPager.jsx'
import PrevPager from './pager/PrevPager.jsx'
import Status from './Status.jsx'
import Body from './Body.jsx'
import _ from 'underscore'

export default class Calendar extends Component {
  constructor() {
    super()
    const now = new Date()
    const defaults = {
      cellSize: 80,
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      openHour: 10,
      closeHour: 19,
      events: [
      {
        startDate: new Date("2016/10/20 15:00:00"),
        endDate: new Date("2016/10/20 16:00:00"),
        status: "open",
      },
      {
        startDate: new Date("2016/10/20 16:00:00"),
        endDate: new Date("2016/10/20 17:00:00"),
        status: "close",
      },
      {
        startDate: new Date("2016/10/20 17:00:00"),
        endDate: new Date("2016/10/20 18:00:00"),
        status: "close",
      },
      {
        startDate: new Date("2016/10/21 18:00:00"),
        endDate: new Date("2016/10/21 19:00:00"),
        status: "open",
      },
      {
        startDate: new Date("2016/10/31 10:00:00"),
        endDate: new Date("2016/10/31 11:00:00"),
        status: "close",
      },
    ]
    }
    this.state = _.defaults(_.pick(this.props, ...Object.keys(defaults)), defaults)
  }
  render() {
    const {
      cellSize,
      year,
      month,
      openHour,
      closeHour,
      events
    } = this.state

    return (
      <div style={Object.assign({}, styles.container, {width: cellSize * 7 + 8})}>
        <div style={styles.headerContainer}>
          <PrevPager
            onClick={()=>{
              const prevMonth = this.state.month - 1 < 1 ? 12 : this.state.month - 1
              const year = prevMonth == 12 ? this.state.year - 1 : this.state.year
              this.setState({year: year, month: prevMonth})
            }}/>
          <Header
            year={year}
            month={month}
            />
          <NextPager
            onClick={()=>{
              const nextMonth = this.state.month + 1 > 12 ? 1 : this.state.month + 1
              const year = nextMonth == 1 ? this.state.year + 1 : this.state.year
              this.setState({year: year, month: nextMonth})
            }}/>
        </div>
        <div style={styles.calendar}>
          <div style={styles.dayOfWeekContainer}>
          {
            ['日', '月', '火', '水', '木', '金', '土'].map((day, index) => {
              return (
                <div key={index} style={Object.assign({}, styles.dayOfWeek, {width: cellSize})}>{day}</div>
              )
            })
          }
          </div>
          <Body
            year={year}
            month={month}
            openHour={openHour}
            closeHour={closeHour}
            events={events}
            />
          <div style={styles.footerContainer}>
            <div style={styles.footerItem}>
              <Status
                status='open'
                />
              <span style={styles.footerText}>空きあり</span>
            </div>
            <div style={styles.footerItem}>
              <Status
                status='least'
                number={2}
                />
              <span style={styles.footerText}>残り２枠</span>
            </div>
            <div style={styles.footerItem}>
              <Status
                status='close'
                />
              <span style={styles.footerText}>空きなし</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '60px',
    marginRight: '60px',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '8px'
  },
  dayOfWeekContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  dayOfWeek: {
    textAlign: 'center'
  },
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20
  },
  footerText: {
    marginLeft: 10
  }

}
