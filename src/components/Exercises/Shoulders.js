import React, { Component } from "react";
import ExerciseList from "../../Shared/ExerciseList";

export default class Shoulders extends Component {
  render() {
    const exercises = [
      {
        Name: "DUMBBELL SHOULDER PRESS",
        Url: "https://www.youtube.com/watch?v=poD_-zaG9hk",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 60-90 sec.)"
      },
      {
        Name: "UPRIGHT BARBELL ROW",
        Url: "https://www.youtube.com/watch?v=amCU-ziHITM",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 30-60 sec.)"
      },
      {
        Name: "SEATED BENT-OVER REAR DELT RAISE",
        Url: "https://www.youtube.com/watch?v=p1yQnTNE808",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (rest 10-20 sec.)"
      },
      {
        Name: "SIDE LATERAL RAISE",
        Url: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
        Set: "3 sets, 6-8, 8-10, 10-12 reps (No Rest)"
      },
      {
        Name: "STANDING FRONT  RAISE OVER HEAD",
        Url: "https://www.youtube.com/watch?v=-t7fuZ0KhDA",
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
          <i>TOP 5 SHOULDERS WORKOUTS</i>
        </h1>
        <ExerciseList exercises={exercises} />
      </React.Fragment>
    );
  }
}
