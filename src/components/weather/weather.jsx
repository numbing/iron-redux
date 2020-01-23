import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weatherAction";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: ""
    };
  }
  inputHandler = e => {
    this.setState({
      city: e.target.value
    });
  };

  clickHandler = () => {
    this.props.getWeatherData(this.state.city);
  };
  // componentDidMount() {
  //   this.props.getWeatherData();
  // }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.city}
          onChange={this.inputHandler}
        />
        <button onClick={this.clickHandler}>get Weather for this city</button>
        <h1>Weather in {this.props.name} is</h1>
        <h1>{this.props.mainWeather && this.props.mainWeather.temp}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.weatherReducer.weatherData.name,
  mainWeather: state.weatherReducer.weatherData.main
});
export default connect(mapStateToProps, { getWeatherData })(Weather);
