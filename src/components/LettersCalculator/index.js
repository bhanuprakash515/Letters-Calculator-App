import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputSearch: '',
  }

  onInputSearch = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  render() {
    const {inputSearch} = this.state
    const count = inputSearch.length

    return (
      <div className="container">
        <div className="card-container">
          <div className="letter-container">
            <h1 className="heading">
              Calculate the letters <br /> you enter
            </h1>

            <label className="para-1">
              Enter the phrase
              <br />
              <input
                type="search"
                className="input-section"
                value={inputSearch}
                placeholder="Enter the phrase"
                onChange={this.onInputSearch}
              />
            </label>
            <p className="para-2">No of Letters : {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
