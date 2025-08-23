"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Bot, Loader2 } from "lucide-react";

import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { getAITips } from "@/app/actions";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  fitnessGoal: z.string().min(1, "Fitness goal is required."),
  workoutHistory: z.string().min(1, "Workout history is required."),
  fitnessLevel: z.string().min(1, "Fitness level is required."),
});

type FormData = z.infer<typeof formSchema>;

export function AITrainer() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    recommendation: string;
    motivation: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessGoal: "",
      workoutHistory: "",
      fitnessLevel: "beginner",
    },
  });

  async function onSubmit(values: FormData) {
    setLoading(true);
    setResult(null);

    const response = await getAITips(values);

    if ("error" in response) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    } else {
      setResult(response);
    }
    setLoading(false);
  }

  return (
    <CyberCard>
      <h3 className="text-lg font-bold mb-4 cyber-text-gradient flex items-center gap-2">
        <Bot /> AI Personal Trainer
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fitnessGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fitness Goal</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., lose weight, build muscle" {...field} className="bg-transparent border-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workoutHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recent Workout</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., ran 5km, cycled for 30 mins" {...field} className="bg-transparent border-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fitnessLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fitness Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-transparent border-primary/50">
                      <SelectValue placeholder="Select your fitness level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <CyberButton type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Get Pro Tips"
            )}
          </CyberButton>
        </form>
      </Form>
      {result && (
        <CyberCard variant="inner" className="mt-6 space-y-4">
            <div>
                <h4 className="font-bold text-secondary cyber-glow-secondary">Recommendation:</h4>
                <p className="text-sm text-muted-foreground">{result.recommendation}</p>
            </div>
            <div>
                <h4 className="font-bold text-accent cyber-glow-accent">Motivation:</h4>
                <p className="text-sm text-muted-foreground">{result.motivation}</p>
            </div>
        </CyberCard>
      )}
    </CyberCard>
  );
}
