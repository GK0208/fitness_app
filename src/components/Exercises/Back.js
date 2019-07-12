import React, { Component } from "react";
import ExerciseList from "../../Shared/ExerciseList";

export default class Back extends Component {
  render() {
    const exercises = [
      {
        Name: "BARBELL DEADLIFT",
        Url: "https://www.youtube.com/watch?v=ytGaGIn3SjE",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 60-90 sec.)"
      },
      {
        Name: "WIDE-GRIP PULL-UP",
        Url: "https://www.youtube.com/watch?v=iywjqUo5nmU",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 30-60 sec.)"
      },
      {
        Name: "STANDING T-BAR ROW",
        Url: "https://www.youtube.com/watch?v=15Z0gYMTU04",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 10-20 sec.)"
      },
      {
        Name: "CLOSE-GRIP PULL-DOWN",
        Url: "https://www.youtube.com/watch?v=liG8_rbhUtM",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (No Rest)"
      },
      {
        Name: "BENT-OVER BARBELL ROW",
        Url: "https://www.youtube.com/watch?v=T3N-TO4reLQ",
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
          <i>TOP 5 BACK WORKOUTS</i>
        </h1>
        <ExerciseList exercises={exercises} />
      </React.Fragment>
    );
  }
}
