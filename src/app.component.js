import './app.style.scss';
import React, { Component } from 'react'
import RomanNumericService from './services/roman-numeric.service';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeric: '',
      roman: '',
      error: false
    }

    this.handleNumericChange = this.handleNumericChange.bind(this);
    this.handleRomanChange = this.handleRomanChange.bind(this);
  }

  handleNumericChange(event) {
    this.setState({
      numeric: event.target.value
    });

    const roman = RomanNumericService.toRoman(Number(event.target.value));

    if (roman === -1) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false,
        roman: roman
      })
    }
  }

  handleRomanChange(event) {
    this.setState({
      roman: event.target.value
    })

    const numeric = RomanNumericService.toNumeric(event.target.value);
    
    this.setState({
      numeric: numeric
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {
            this.state.error ? (
              <div className="error">Number greater than 3999 are not supported</div>
            ) : (
              null
            )
          }
          <h2 className="title" data-testid="title">Numeric to Roman and Roman to Numeric converter</h2>
          <input
            className="numeric-input"
            type="text"
            value={this.state.numeric} 
            onChange={this.handleNumericChange}
            placeholder="Enter numeric value"
            data-testid="numeric-text"
          />
          <input
            className="roman-input"
            type="text"
            value={this.state.roman}
            onChange={this.handleRomanChange}
            placeholder="Enter roman value"
            data-testid="roman-text"
          />
        </div>
      </div>
    )
  }
}


