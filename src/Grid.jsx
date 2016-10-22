import React, { Component } from 'react';

import * as color from './styles/color.jsx'

export default class Grid extends Component {
  render() {
    const { number, height } = this.props
    return (
      <div style={{height: height}}>
        {
          _(number).times(index => {
            let style = Object.assign({}, styles.grid, {height: height / number - 1})
            if (index == number - 1) {
              Object.assign(style, styles.underline)
            }
            return (
              <div
                key={index}
                style={style}
                ></div>
            )
          })
        }
      </div>
    )
  }
}

const styles = {
  container: {

  },
  grid: {
    borderTop: `solid 1px ${color.strokeWeak}`
  },
  underline: {
    borderBottom: `solid 1px ${color.strokeWeak}`
  }
}
