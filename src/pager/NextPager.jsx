import React, { Component } from 'react';

export default class NextPager extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div onClick={()=>{
        onClick()
      }}>
        <i className="material-icons" style={styles.icon}>keyboard_arrow_right</i>
      </div>
    );
  }
}

const styles = {
  icon: {
    fontSize: 36,
    fontWeight: 10,
    "msUserSelect": 'none',
    "WebkitUserSelect": 'none',
    "MozUserSelect": 'none'
  }
}
