import React, { Component } from 'react'
import iphoneSpinner from './Iphone-spinner.gif'
export class Loader extends Component {
  render() {
    return (
      <div className="text-center" >
        <img src={iphoneSpinner} alt="iphoneSpinner" />
      </div>
    )
  }
}

export default Loader
