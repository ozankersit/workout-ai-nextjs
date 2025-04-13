import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Props = {
  workoutPlan: string | null;
  setWorkoutPlan: (workoutPlan: string | null) => void;
};

export default function WorkoutDisplay({ workoutPlan, setWorkoutPlan }: Props) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Your Workout Program
      </h2>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md text-sm overflow-auto max-h-[500px]">
        {workoutPlan}
      </pre>
      <Button className="mt-6" onClick={() => setWorkoutPlan(null)}>
        Generate a New Workout Plan
      </Button>
    </Card>
  );
}
