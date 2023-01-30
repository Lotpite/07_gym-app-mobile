export const DB = {
  name: "Andrew",
  email: "Email@email.com",
  gym: {
    trainings: [
      {
        id: "1/14/2023",
        exercises: [
          {
            id: "push ups",
            total: 40,
            sets: [
              { order: 1, active: false, reps: 10 },
              { order: 2, active: false, reps: 12 },
              { order: 3, active: false, reps: 13 },
              { order: 4, active: false, reps: 5 },
              { order: 5, active: false, reps: 0 },
            ],
          },
          {
            id: "Squats",
            total: 24,
            sets: [
              { order: 1, active: false, reps: 10 },
              { order: 2, active: false, reps: 10 },
              { order: 3, active: false, reps: 4 },
              { order: 4, active: false, reps: 0 },
              { order: 5, active: false, reps: 0 },
            ],
          },
          {
            id: "Crunches",
            total: 66,
            sets: [
              { order: 1, active: false, reps: 9 },
              { order: 2, active: false, reps: 11 },
              { order: 3, active: false, reps: 20 },
              { order: 4, active: false, reps: 15 },
              { order: 5, active: false, reps: 11 },
            ],
          },
        ],
      },
      {
        id: "1/13/2023",
        exercises: [
          { id: "push ups", total: 35 },
          { id: "Squats", total: 25 },
          { id: "Crunches", total: 67 },
        ],
      },
    ],
  },
};
