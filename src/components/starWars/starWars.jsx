import React, { Component } from "react";
import { connect } from "react-redux";
import { getStarWarsData } from "./starWarsAction";
import StarWarsCard from "./StarWarsCard";

class starWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
  }
  render() {
    return (
      <div>
        <h1>
          we count starWars charechters and they are: {this.props.count} of them
        </h1>
        <StarWarsCard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.starWarsReducer.starWarsData.count
});

export default connect(mapStateToProps, { getStarWarsData })(starWars);
