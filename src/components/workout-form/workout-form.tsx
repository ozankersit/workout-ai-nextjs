// "use client";

// import { useState, type FormEvent, useTransition } from "react";
// import { generateWorkoutPlan } from "@/app/workout-action/action";
// import WorkoutFormElements from "./workout-form-elements";
// import WorkoutDisplay from "../workout-display";

// export default function WorkoutForm() {
//   const [workoutPlan, setWorkoutPlan] = useState<string | null>(null);
//   const [isPending, startTransition] = useTransition();
//   const [formErrors, setFormErrors] = useState<Record<string, string[]> | null>(
//     null
//   );

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     startTransition(async () => {
//       const response = await generateWorkoutPlan(formData);
//       if (response.success) {
//         setWorkoutPlan(response.workoutPlan);
//         setFormErrors(null);
//       } else {
//         setFormErrors(response.zodErros ?? null);
//         setWorkoutPlan(response.message || null);
//       }
//     });
//   };

//   return (
//     <>
//       {!workoutPlan ? (
//         <WorkoutFormElements
//           formErrors={formErrors}
//           isPending={isPending}
//           handleSubmit={handleSubmit}
//         />
//       ) : (
//         <WorkoutDisplay
//           workoutPlan={workoutPlan}
//           setWorkoutPlan={setWorkoutPlan}
//         />
//       )}
//     </>
//   );
// }
