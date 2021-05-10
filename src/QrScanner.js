import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import './QrScanner.css';
class QrScanner extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="qr-scanner">
        <QrReader
          delay={0}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '90%' }}
        />
        <div className="qr-bar"></div>
      </div>
    )
  }
}
export default QrScanner