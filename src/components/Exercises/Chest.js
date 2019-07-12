import React, { Component } from "react";
import ExerciseList from "../../Shared/ExerciseList";

export default class Chest extends Component {
  render() {
    const exercises = [
      {
        Name: "BENCH PRESS",
        Url: "https://www.youtube.com/watch?v=x5t9PZ5CsxY",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 60-90 sec.)"
      },
      {
        Name: "DUMBBELL BENCH PRESS",
        Url: "https://www.youtube.com/watch?v=5n9TlaoRD58",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 30-60 sec.)"
      },
      {
        Name: "LEVERAGE DECLINE PRESS",
        Url: "https://www.youtube.com/watch?v=15Z0gYMTU04",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 10-20 sec.)"
      },
      {
        Name: "INCLINE DUMBBELL FLYES",
        Url: "https://www.youtube.com/watch?v=eozdVDA78K0",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (No Rest)"
      },
      {
        Name: "BUTTERFLY",
        Url: "https://www.youtube.com/watch?v=WpVu2duHnQE",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 60-90 sec.)"
      }
    ];
    return (
      <React.Fragment>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10%",
            fontFamily: "Impact,Charcoal,sans-serif"
          }}
        >
          <i>TOP 5 CHEST WORKOUTS</i>
        </h1>
        <ExerciseList exercises={exercises} />
      </React.Fragment>
    );
  }
}
