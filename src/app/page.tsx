import WorkoutForm from "@/components/workout-form/workout-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Workout Program Awaits!
          </h1>
          <p className="mt-4 text-lg text-gray-600">Fill in your details and get a workout plan tailored just for you!</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}
