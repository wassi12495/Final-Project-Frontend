import React, { Component } from "react";
import { connect } from "react-redux";

class ExerciseCategoryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Cardio", "Olympic Lifts", "Body Weight"]
    };
  }

  render = () => {
    const { options } = this.state;
    return options.map((category, i) => {
      return (
        <option key={i} value={category}>
          {category}
        </option>
      );
    });
  };
}
export default connect()(ExerciseCategoryOptions);
