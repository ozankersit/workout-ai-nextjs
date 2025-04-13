import { FormEvent } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type Props = {
  formErrors: Record<string, string[]> | null;
  isPending: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function WorkoutFormElements({
  formErrors,
  isPending,
  handleSubmit,
}: Props) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup
            defaultValue="male"
            name="gender"
            className="flex flex-col space-y-1"
            required
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="font-normal">
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="font-normal">
                Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label htmlFor="fitnessLevel">Fitness Level</Label>
          <Select name="fitnessLevel" defaultValue="beginner" required>
            <SelectTrigger>
              <SelectValue placeholder="Fitness seviyenizi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            name="age"
            placeholder="Your Age"
            defaultValue="25"
            required
          />
          {formErrors?.age ? (
          <p className="text-red-500 text-sm">{formErrors.age}</p>
        ) : (null)}
        </div>
        <div className="space-y-3">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            type="number"
            id="height"
            name="height"
            placeholder="Your height"
            defaultValue="170"
            required
          />
          {formErrors?.height ? (
          <p className="text-red-500 text-sm">{formErrors.height}</p>
        ) : (null)}
        </div>
        <div className="space-y-3">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            type="number"
            id="weight"
            name="weight"
            placeholder="Your weight"
            defaultValue="70"
            required
          />
          {formErrors?.weight ? (
          <p className="text-red-500 text-sm">{formErrors.weight}</p>
        ) : (null)}
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="goals">Goals</Label>
        <Textarea
          id="goals"
          name="goals"
          placeholder="What is your purpose and goal for working out? (e.g., losing weight, building muscle, increasing endurance, etc.)"
          className="resize-none"
          required
        />
        {formErrors?.goals ? (
          <p className="text-red-500 text-sm">{formErrors.goals}</p>
        ) : (
          <p className="text-sm text-gray-500">
            Please describe your goals in detail.
          </p>
        )}
      </div>
      <div className="space-y-3">
        <Label htmlFor="limitations">
        Health Conditions / Limitations (Optional)
        </Label>
        <Textarea
          id="limitations"
          name="limitations"
          placeholder="Do you have any health issues or physical limitations? (e.g., knee problems, back pain, etc.)"
          className="resize-none"
        />
        <p className="text-sm text-gray-500">
        Let us know if you have any medical conditions or physical restrictions.
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Workout Plan...
          </>
        ) : (
          "Generate a Workout Plan"
        )}
      </Button>
    </form>
  );
}
