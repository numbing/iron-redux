import React from "react";
import { connect } from "react-redux";

const StarWarsCard = props => {
  console.log("carddddd", props);
  return (
    <div>
      <h1> i am card</h1>
    </div>
  );
};
const mapStateToProps = state => ({
  data: state.starWarsReducer.starWarsData.results
});
export default connect(mapStateToProps)(StarWarsCard);
