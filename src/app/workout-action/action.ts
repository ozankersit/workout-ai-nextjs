"use server"

import { z } from "zod"


export async function generateWorkoutPlan(formData: FormData) {

  const schema = z.object({
    gender: z.enum(["male", "female", "other"], {
      required_error: "Lütfen cinsiyet seçin",
    }),
    age: z.coerce.number().min(13, "Min 13 age").max(100, "Max 100 age"),
    height: z.coerce.number().min(100, "Height min 100cm").max(250, "Height max 250cm"),
    weight: z.coerce.number().min(30, "Min 30kg").max(250, "Max 250kg"),
    fitnessLevel: z.enum(["beginner", "intermediate", "advanced"]),
    goals: z
      .string()
      .min(5, "Min 5 characters")
      .max(500, "Max 500 characters"),
    limitations: z.string().optional(),
  })

  try {
    const validatedFields = schema.safeParse({
      gender: formData.get("gender"),
      age: formData.get("age"),
      height: formData.get("height"),
      weight: formData.get("weight"),
      fitnessLevel: formData.get("fitnessLevel"),
      goals: formData.get("goals"),
      limitations: formData.get("limitations"),
    })

    if(!validatedFields.success) {
      return {
        success: false,
        zodErros: validatedFields.error.flatten().fieldErrors,
      }
    }

    const age = validatedFields.data.age
    const height = validatedFields.data.height
    const weight = validatedFields.data.weight
    const fitnessLevel = validatedFields.data.fitnessLevel
    const goals = validatedFields.data.goals
    const limitations = validatedFields.data.limitations

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ""}/api/generate-workout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age,
        height,
        weight,
        fitnessLevel,
        goals,
        limitations,
      }),
    })

    if (!response.ok) {
      throw new Error(`API response failed: ${response.status}`)
    }

    const result = await response.json()

    return {
      success: true,
      workoutPlan: result.workoutPlan,
    }
  } catch (error) {
    console.error("Error generating workout plan:", error)

    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string[]> = {}

      error.errors.forEach((err) => {
        const field = err.path[0] as string
        if (!fieldErrors[field]) {
          fieldErrors[field] = []
        }
        fieldErrors[field].push(err.message)
      })

      return {
        success: false,
        errors: fieldErrors,
      }
    }

    return {
      success: false,
      message: "Generating workout plan failed",
    }
  }
}
