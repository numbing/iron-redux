import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weatherAction";

class Weather extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>i am weather</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state
});
export default connect(mapStateToProps, { getWeatherData })(Weather);
