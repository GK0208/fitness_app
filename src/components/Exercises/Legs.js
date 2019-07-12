import React, { Component } from "react";
import ExerciseList from "../../Shared/ExerciseList";

export default class Legs extends Component {
  render() {
    const exercises = [
      {
        Name: "BARBELL SQUAT",
        Url: "https://www.youtube.com/watch?v=1oed-UmAxFs",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 60-90 sec.)"
      },
      {
        Name: "DUMBBELL LUNGES",
        Url: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 30-60 sec.)"
      },
      {
        Name: "LEG PRESS",
        Url: "https://www.youtube.com/watch?v=GvRgijoJ2xY",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 10-20 sec.)"
      },
      {
        Name: "LYING LEG CURLS",
        Url: "https://www.youtube.com/watch?v=1Tq3QdYUuHs",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (No Rest)"
      },
      {
        Name: "LEG EXTENSIONS",
        Url: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
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
          <i>TOP 5 LEGS WORKOUTS</i>
        </h1>
        <ExerciseList exercises={exercises} />
      </React.Fragment>
    );
  }
}
