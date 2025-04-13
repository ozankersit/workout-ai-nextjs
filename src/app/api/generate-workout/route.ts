// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(request: Request) {
//   try {
//     if (!process.env.OPENAI_API_KEY) {
//       console.error("OPENAI_API_KEY is not defined");
//       return NextResponse.json(
//         { error: "OPENAI_API_KEY is not defined" },
//         { status: 500 }
//       );
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const body = await request.json();
//     const { gender, age, height, weight, fitnessLevel, goals, limitations } =
//       body;

//     const fitnessLevelMap = {
//       beginner: "Beginner",
//       intermediate: "Intermediate",
//       advanced: "Advanced",
//     };

//     const genderMap = {
//       male: "Male",
//       female: "Female",
//     };

//     const prompt = `
//   Create a personalized workout plan based on the following information:
  
//   Gender: ${genderMap[gender as keyof typeof genderMap]}
//   Age: ${age}
//   Height: ${height} cm
//   Weight: ${weight} kg
//   Fitness Level: ${
//     fitnessLevelMap[fitnessLevel as keyof typeof fitnessLevelMap]
//   }
//   Goals: ${goals}
//   ${limitations ? `Limitations/Health Conditions: ${limitations}` : ""}

//   Please provide a detailed weekly workout plan that includes:
//   1. A workout routine for each day of the week
//   2. Sets and repetitions for each exercise
//   3. Rest times
//   4. Warm-up and cool-down recommendations
//   5. Nutrition suggestions

//   Make sure the plan is tailored to the person's fitness level and goals. Take into account any health limitations if provided.
// `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a fitness expert. You create personalized workout plans based on users' information.",
//         },
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 2000,
//     });

//     const workoutPlan = response.choices[0].message.content;

//     return NextResponse.json({ workoutPlan });
//   } catch (error) {
//     console.error("Error generating workout plan:", error);
//     return NextResponse.json(
//       { error: "Error generating workout plan" },
//       { status: 500 }
//     );
//   }
// }
