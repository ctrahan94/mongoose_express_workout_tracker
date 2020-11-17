const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        require: "You must enter an exercise type",
      },
      name: {
        type: String,
        require: "You must enter the exercise name"
      },
      duration: {
        type: Number,
        require: "You must enter the duration you exercised"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    },
  ],
}, {
  toJSON: {virtuals: true}
});

WorkoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
