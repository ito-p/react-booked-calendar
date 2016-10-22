import React, { Component } from 'react';

import * as color from './styles/color.jsx'

const MARGIN_VERTICAL = 4
const MARGIN_HORIZONTAL = 8

export default class TimeBlock extends Component {
  render() {
    const { event, openHour, span, width, onClick } = this.props
    const top = (event.startDate.getHours() - openHour) * span
    return (
      <div
        onClick={() => {
          onClick(event)
        }}
        style={Object.assign({}, styles.container, { top: top, width: width, height: span })}>
        {
          event.status == 'open'
            ? this._renderBlock("◯", styles.open, span - (MARGIN_VERTICAL * 2))
            : this._renderBlock("×", styles.close, span - (MARGIN_VERTICAL * 2))
        }
      </div>
    )
  }
  _renderBlock(text, style, height) {
    return (
      <div style={styles.blockContainer}>
        <div style={Object.assign({}, styles.block, style, {height: height})}>
          <div style={Object.assign({}, styles.status, {height: height})}>{text}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'absolute'
  },
  blockContainer: {
    height: '100%'
  },
  block: {
    position: 'static',
    borderRadius: '5px',
    marginTop: MARGIN_VERTICAL,
    marginLeft: MARGIN_HORIZONTAL,
    marginRight: MARGIN_HORIZONTAL,
    display: 'flex',
    justifyContent: 'center'
  },
  open: {
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  close: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  status: {
    paddingTop: '3px',
    color: color.invertText,
    fontFamily: 'mplus-2c-light'
  }
}
