import React, { Component } from "react";

import ExerciseCard from "./ExerciseCard";

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exercises: [
        {
          Name: "Chest",
          Src:
            "https://media0.mensxp.com/media/content/2019/Feb/develop-a-thick-amp-broad-chest-1400x653-1549633758_1100x513.jpg"
        },
        {
          Name: "Back",
          Src:
            "https://previews.123rf.com/images/fotokvadrat/fotokvadrat1609/fotokvadrat160900013/64009115-athlete-muscular-bodybuilder-training-on-simulator-in-the-gym-back-workout-in-gym.jpg"
        },
        {
          Name: "Shoulders",
          Src:
            "https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/media/1109-shoulders.jpg"
        },
        {
          Name: "Legs",
          Src:
            "https://www.mensjournal.com/wp-content/uploads/mf/legs-squat-1280.jpg?w=1200&h=630&crop=1"
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.Exercises.map((x, index) => (
          <div key={index} className="col-md-6">
            <ExerciseCard Name={x.Name} Src={x.Src} />
          </div>
        ))}
      </div>
    );
  }
}

export default Exercises;
